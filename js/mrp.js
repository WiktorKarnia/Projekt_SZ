
function MRP_Ramy_Materace() {
    console.log(production_val);
    var table=document.getElementById("mattres_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            console.log(production_val[i]);
            console.log("index materac: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_matt").value)));
        }
    }

    var table=document.getElementById("frame_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            console.log(production_val[i]);
            console.log("index rama: " + ((parseInt(i)+1)-parseInt(document.getElementById("lead_time_frame").value)));
        }
    }
    /*
    for (var r = 3, row; row = table.rows[r];) {
        for (var c = 1, cell; cell = row.cells[c]; c++) {

        }
    }
    */
}