//var tables = ["mattres_table", "frame_table", "planks_table", "legs_table", "stelaz_table"]
//var lead_time = ["lead_time_matt","lead_time_frame", "lead_time_boards", "lead_time_legs", "lead_time_racks"]
//var lot_size = ["lot_size_matt", "lot_size_frame", "lot_size_boards", "lot_size_legs", "lot_size_racks"]
// var in_stock = ["in_stock_matt", "in_stock_frame", "in_stock_boards", "in_stock_legs", "in_stock_racks"]

function MRP_Ramy_Materace() {

    console.log(production_val);
    var table=document.getElementById("mattres_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            console.log(production_val[i]);
            console.log("index materac: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_matt").value)));
            var value = parseInt(production_val[i]);
            var cellIndex = ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_matt").value));
            var rowIndex = 1;
            document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    console.log(neded);
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_matt").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                in_stock = in_stock + parseInt(document.getElementById("lot_size_matt").value);
                cell.innerHTML = in_stock;

                var cellIndex = (parseInt(c));
                var rowIndex = 4;
                document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_matt").value));

                var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_matt").value));
                var rowIndex = 5;
                //console.log(parseInt(document.getElementById("lot_size_matt").value));
                document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_matt").value);
                
                var cellIndex = (parseInt(c));
                var rowIndex = 6;
                document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_matt").value);
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }


    var table=document.getElementById("frame_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            console.log(production_val[i]);
            console.log("index rama: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value)));
            var value = parseInt(production_val[i]);
            var cellIndex = ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value));
            var rowIndex = 1;
            document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    console.log(neded);
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_frame").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                in_stock = in_stock + parseInt(document.getElementById("lot_size_frame").value);
                cell.innerHTML = in_stock;
                
                var cellIndex = (parseInt(c));
                var rowIndex = 4;
                document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_frame").value));

                var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_frame").value));
                var rowIndex = 5;
                //console.log(parseInt(document.getElementById("lot_size_matt").value));
                document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value);
                
                var cellIndex = (parseInt(c));
                var rowIndex = 6;
                document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value);
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }

    var table=document.getElementById("planks_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            console.log(production_val[i]);
            console.log("index deski: " + (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value))-parseInt(document.getElementById("lead_time_boards").value)));
            var value = parseInt(production_val[i])*4;
            var cellIndex = (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value))-parseInt(document.getElementById("lead_time_boards").value));
            var rowIndex = 1;
            document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    console.log(neded);
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_boards").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                in_stock = in_stock + parseInt(document.getElementById("lot_size_boards").value);
                cell.innerHTML = in_stock;
                
                var cellIndex = (parseInt(c));
                var rowIndex = 4;
                document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_boards").value));

                var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_boards").value));
                var rowIndex = 5;
                //console.log(parseInt(document.getElementById("lot_size_matt").value));
                document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value);
                
                var cellIndex = (parseInt(c));
                var rowIndex = 6;
                document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value);
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }

    var table=document.getElementById("legs_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            console.log(production_val[i]);
            console.log("index rama: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_legs").value)));
            var value = parseInt(production_val[i])*4;
            var cellIndex = (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value))-parseInt(document.getElementById("lead_time_legs").value));
            var rowIndex = 1;
            document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }

    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    console.log(neded);
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_legs").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                in_stock = in_stock + parseInt(document.getElementById("lot_size_legs").value);
                cell.innerHTML = in_stock;
                
                var cellIndex = (parseInt(c));
                var rowIndex = 4;
                document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_legs").value));

                var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_legs").value));
                var rowIndex = 5;
                //console.log(parseInt(document.getElementById("lot_size_matt").value));
                document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value);
                
                var cellIndex = (parseInt(c));
                var rowIndex = 6;
                document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value);
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }

    var table=document.getElementById("stelaz_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            console.log(production_val[i]);
            console.log("index rama: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_racks").value)));
            var value = parseInt(production_val[i]);
            var cellIndex = (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value))-parseInt(document.getElementById("lead_time_racks").value));
            var rowIndex = 1;
            document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    console.log(neded);
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_racks").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                in_stock = in_stock + parseInt(document.getElementById("lot_size_racks").value);
                cell.innerHTML = in_stock;
                
                var cellIndex = (parseInt(c));
                var rowIndex = 4;
                document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_racks").value));

                var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_racks").value));
                var rowIndex = 5;
                //console.log(parseInt(document.getElementById("lot_size_matt").value));
                document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value);
                
                var cellIndex = (parseInt(c));
                var rowIndex = 6;
                document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value);
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }      
}