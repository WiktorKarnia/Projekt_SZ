function GHP_events() {
    var table=document.getElementById("ghp_table");
    val = [];
    var count = 0;
    for (var r = 1, row; row = table.rows[r]; r++) {
        if(r<3){
            for (var c = 1, cell; cell = row.cells[c]; c++) {
                cell.addEventListener('input', GHP_available);
            }
        }  
    }
}
function GHP_events_MRP() {
    var tables = ["mattres_table", "frame_table", "planks_table", "legs_table", "stelaz_table"]
    var arrayLength = tables.length;
    for (var i = 0; i < arrayLength; i++) {
        var table=document.getElementById(tables[i]);
        var row = table.rows[2];
        for (var c = 1, cell; cell = row.cells[c]; c++) {
            cell.document.createElement("input");
            cell.addEventListener('input', test_listeners);
 
        }
    }
}
function test_listeners(){
    console.log("test")
}

function clear_ghp_table() {
    document.getElementById("tables").style.display="none";
    var table=document.getElementById("ghp_table");
    val = [];
    var count = 0;
    for (var r = 1, row; row = table.rows[r]; r++) {
        if(r<4){
            for (var c = 1, cell; cell = row.cells[c]; c++) {
                count++
                document.getElementById("test"+ count).value = '';
            }
        }  
    }
    scroll("ghp_table");
}