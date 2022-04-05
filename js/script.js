function cellListeners(){
    document.querySelectorAll("#ghp_table td")
    .forEach(e => e.addEventListener("input", ghp_available));
}

function scroll(element_id){
    var element = document.getElementById(element_id);
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

function show(){
    document.getElementById("tables").style.display="block";
    
    MRP_Materace_Map();
    MRP_Rama_Map();
    MRP_Deski_Map();
    MRP_Nogi_Map();
    MRP_Stelaze_Map();
    
    scroll("mattres_table");

}

var demand_val;
var production_val;
var val;

function GHP_iterate() {
    var table=document.getElementById("ghp_table");
    val = [];
    var count = 0;
    for (var r = 1, row; row = table.rows[r]; r++) {
        if(r<3){
            for (var c = 1, cell; cell = row.cells[c]; c++) {
                count++    
                val.push(document.getElementById("test"+ count).value)
            }
        }  
    }
    var half = Math.ceil(val.length / 2); 
    demand_val = val.slice(0,half);
    production_val = val.slice(-half);
}

const input = document.getElementById("in_stock");

const input2 = document.getElementById("lead_time");

input.addEventListener('input', GHP_available);
input2.addEventListener('input', GHP_available);

var available_arr;

function GHP_available(e) {
    GHP_iterate();
    
    var count = 20;
    var stock = input.value
    var table=document.getElementById("ghp_table");
    available_arr = [];
    for (var r = 3, row; row = table.rows[r];) {
            for (var c = 1, cell; cell = row.cells[c]; c++) {
                while (count <= 30){
                    count++
                    
                    if(demand_val[count-21]>0 && production_val[count-21]==0){
                        stock = parseInt(stock) - parseInt(demand_val[count-21]);
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                    }
                    else if(demand_val[count-21]==0 && production_val[count-21]>0){
                        stock = parseInt(stock) + parseInt(production_val[count-21]);
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                    }
                    else if(demand_val[count-21]>0 && production_val[count-21]>0){
                        stock = (parseInt(stock) + parseInt(production_val[count-21])) - parseInt(demand_val[count-21]);
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                    }
                    else{
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                    }
                }
            }
        } 
    }

function clear_mrp_tables() {
    var tables = ["mattres_table", "frame_table", "planks_table", "legs_table", "stelaz_table"]
    var arrayLength = tables.length;
    var counter = 0;
    for (var i = 0; i < arrayLength; i++) {
        var table=document.getElementById(tables[i]);
        for (var r = 1, row; row = table.rows[r]; r++) {
            if(r == 2){
                for (var c = 1, cell; cell = row.cells[c]; c++) {
                    counter++
                    cell.innerHTML = "<input type='number' min='0' class='table_input' id='pp"+String(counter)+"' style='width:30px;height:30px;' oninput='this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null'>";
                }
            }
            else {
                for (var c = 1, cell; cell = row.cells[c]; c++) {
                    cell.innerHTML = '';
                }
            }
        }
    }
    bought_materace = [];
    bought_ramy = [];
    bought_deski = [];
    bought_nogi = [];
    bought_stelaze = [];

}

function check_values(){
    
    if(available_arr.every(v => v >= 0)){
        
        if(better_of() == true) { 
            clear_mrp_tables()
            GHP_events_MRP();
            MRP_Ramy_Materace();
            check_values_mrp();
        }
        else{
            document.getElementById("tables").style.display="none";
            alert("Potrzebujemy więcej czasu!");
        }
    }
    else{
        alert("Proszę sprawdzić czy wszystkie wartości są odpowiednio podane!");
    }
    
}

function better_of(){
    for (let i = 0; i < production_val.length; i++) {
        if (production_val[i] != '') {
            var smt = production_val.indexOf(production_val[i])+1;
            break
        }
    }
    var deski_r_g = parseInt(document.getElementById("lead_time_boards").value)+parseInt(document.getElementById("lead_time_frame").value)+parseInt(document.getElementById("lead_time").value);
    var nogi_r_g = parseInt(document.getElementById("lead_time_legs").value)+parseInt(document.getElementById("lead_time_frame").value)+parseInt(document.getElementById("lead_time").value);
    var stelaze_r_g = parseInt(document.getElementById("lead_time_racks").value)+parseInt(document.getElementById("lead_time_frame").value)+parseInt(document.getElementById("lead_time").value);
    
    if (smt >= deski_r_g && smt >= nogi_r_g && smt >= stelaze_r_g) {
        return true
    } else {
        return false
    }
}






