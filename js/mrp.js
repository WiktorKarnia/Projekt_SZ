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
            console.log("index materac: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time").value)));
            var value = parseInt(production_val[i]);
            var cellIndex = ((parseInt(i)+1)-parseInt(document.getElementById("lead_time").value));
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
                if(in_stock + parseInt(document.getElementById("lot_size_matt").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_matt").value));
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_matt").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_matt").value));
                    var rowIndex = 5;
                    //console.log(parseInt(document.getElementById("lot_size_matt").value));
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value));

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value));
                }
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_matt").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_matt").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_matt").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_matt").value));
                    var rowIndex = 5;
                    //console.log(parseInt(document.getElementById("lot_size_matt").value));
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value)*lot_count);

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value)*lot_count);
                }
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
            console.log("index rama: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time").value)));
            var value = parseInt(production_val[i]);
            var cellIndex = ((parseInt(i)+1)-parseInt(document.getElementById("lead_time").value));
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
                if(in_stock + parseInt(document.getElementById("lot_size_frame").value) >= 0){
                    in_stock = in_stock + parseInt(parseInt(document.getElementById("lot_size_frame").value));
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
                else {
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_frame").value));
                    in_stock = in_stock + parseInt(parseInt(document.getElementById("lot_size_frame").value)*lot_count);
                    cell.innerHTML = in_stock;
                    
                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_frame").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_frame").value));
                    var rowIndex = 5;
                    //console.log(parseInt(document.getElementById("lot_size_matt").value));
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value)*lot_count;
                    
                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value)*lot_count;
                }
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }
    var row = table.rows[5];
    var order = [];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        order.push(cell.innerHTML);
        //console.log(order);
    }


    var table=document.getElementById("planks_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(order[i] != ''){
            console.log(order[i]);
            console.log("index deski: " + (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value))));
            var value = parseInt(order[i])*4;
            var cellIndex = (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value)));
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
                if(in_stock + parseInt(document.getElementById("lot_size_boards").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_boards").value));
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
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_boards").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_boards").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_boards").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_boards").value));
                    var rowIndex = 5;
                    //console.log(parseInt(document.getElementById("lot_size_matt").value));
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value)*lot_count;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value)*lot_count;
                }
            }
        }

        else{
            cell.innerHTML = in_stock;
        }
    }

    var table=document.getElementById("legs_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(order[i] != ''){
            console.log(order[i]);
            console.log("index rama: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value)));
            var value = parseInt(order[i])*4;
            var cellIndex = (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value)));
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
                if(in_stock + parseInt(document.getElementById("lot_size_legs").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_legs").value));
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
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_legs").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_legs").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_legs").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_legs").value));
                    var rowIndex = 5;
                    //console.log(parseInt(document.getElementById("lot_size_matt").value));
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value)*lot_count;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value)*lot_count;
                }
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }

    var table=document.getElementById("stelaz_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(order[i] != ''){
            console.log(order[i]);
            console.log("index rama: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value)));
            var value = parseInt(order[i]);
            var cellIndex = (((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value)));
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
                if(in_stock + parseInt(document.getElementById("lot_size_racks").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_racks").value));
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
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_racks").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_racks").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_racks").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_racks").value));
                    var rowIndex = 5;
                    //console.log(parseInt(document.getElementById("lot_size_matt").value));
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value)*lot_count;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value)*lot_count;
                }
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }      
}