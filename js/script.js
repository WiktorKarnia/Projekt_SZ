/*
window.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("subb").click();
    }
});
*/
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

    /*
    MRP_Mapper("lead_time_matt","lot_size_matt","in_stock_matt");
    MRP_Mapper("lead_time_frame","lot_size_frame","in_stock_frame");
    MRP_Mapper("lead_time_boards","lot_size_boards","in_stock_boards");
    MRP_Mapper("lead_time_legs","lot_size_legs","in_stock_legs");
    MRP_Mapper("lead_time_racks","lot_size_racks","in_stock_racks");
    GHP_iterate();
    GHP_available();*/
    
    MRP_Materace_Map();
    MRP_Rama_Map();
    MRP_Deski_Map();
    MRP_Nogi_Map();
    MRP_Stelaze_Map();
    MRP_Ramy_Materace()

    scroll("mattres_table");
    /*
    var element = document.getElementById("mattres_table");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    */
}

/*
function GHP_Map() {
    const ghp = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_ghp").value],
        ["na_stanie", document.getElementById("in_stock_ghp").value],
        ["popyt", document.getElementById("expected_demand_week_ghp").value],
        ["liczba_tygodni", document.getElementById("number_weeks_ghp").value]
    ])
    document.getElementById("tab_lead_time_ghp").innerHTML = "Czas realizacji = " + parseInt(ghp.get("czas_realizacji"));
    document.getElementById("tab_in_stock_ghp").innerHTML = "Na stanie = " + parseInt(ghp.get("na_stanie"));
}
*/

/*
function MRP_Mapper(id1, id2, id3) {
    const Mapp = new Map ([
        ["czas_realizacji", document.getElementById(id1).value],
        ["wielkosc_partii", document.getElementById(id2).value],
        ["na_stanie", document.getElementById(id3).value]
    ])
    //console.log("Czas realizacji: " + Mapp.get("czas_realizacji") +" "+ "Wielkosc partii: " + Mapp.get("wielkosc_partii") +" "+"Na stanie: "+ Mapp.get("na_stanie"));
}*/

function MRP_Materace_Map() {
    const mrp_Materace = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_matt").value],
        ["wielkosc_partii", document.getElementById("lot_size_matt").value],
        ["na_stanie", document.getElementById("in_stock_matt").value]
    ])
    //console.log(mrp_Materace.get("czas_realizacji")+" "+mrp_Materace.get("wielkosc_partii")+" "+mrp_Materace.get("na_stanie"));
    document.getElementById("matt_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Materace.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Materace.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 1" + "<br>" + "Na stanie = " + parseInt(mrp_Materace.get("na_stanie"));
}


function MRP_Rama_Map() {
    const mrp_Rama = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_frame").value],
        ["wielkosc_partii", document.getElementById("lot_size_frame").value],
        ["na_stanie", document.getElementById("in_stock_frame").value]
    ])
    //console.log(mrp_Rama.get("czas_realizacji")+" "+mrp_Rama.get("wielkosc_partii")+" "+mrp_Rama.get("na_stanie"));
    document.getElementById("frame_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Rama.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Rama.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 1" + "<br>" + "Na stanie = " + parseInt(mrp_Rama.get("na_stanie"));
}

function MRP_Deski_Map() {
    const mrp_Deski = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_boards").value],
        ["wielkosc_partii", document.getElementById("lot_size_boards").value],
        ["na_stanie", document.getElementById("in_stock_boards").value]
    ])
    //console.log(mrp_Deski.get("czas_realizacji")+" "+mrp_Deski.get("wielkosc_partii")+" "+mrp_Deski.get("na_stanie"));
    document.getElementById("boards_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Deski.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Deski.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 2" + "<br>" + "Na stanie = " + parseInt(mrp_Deski.get("na_stanie"));
}

function MRP_Nogi_Map() {
    const mrp_Nogi = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_legs").value],
        ["wielkosc_partii", document.getElementById("lot_size_legs").value],
        ["na_stanie", document.getElementById("in_stock_legs").value]
    ])
    //console.log(mrp_Nogi.get("czas_realizacji")+" "+mrp_Nogi.get("wielkosc_partii")+" "+mrp_Nogi.get("na_stanie"));
    document.getElementById("legs_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Nogi.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Nogi.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 2" + "<br>" + "Na stanie = " + parseInt(mrp_Nogi.get("na_stanie"));
}

function MRP_Stelaze_Map() {
    const mrp_Stelaze = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_racks").value],
        ["wielkosc_partii", document.getElementById("lot_size_racks").value],
        ["na_stanie", document.getElementById("in_stock_racks").value]
    ])
    //console.log(mrp_Stelaze.get("czas_realizacji")+" "+mrp_Stelaze.get("wielkosc_partii")+" "+mrp_Stelaze.get("na_stanie"));
    document.getElementById("racks_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Stelaze.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Stelaze.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 2" + "<br>" + "Na stanie = " + parseInt(mrp_Stelaze.get("na_stanie"));
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

                //console.log(document.getElementById("test"+ count).value)
            }
        }  
    }
    var half = Math.ceil(val.length / 2); 
    demand_val = val.slice(0,half);
    production_val = val.slice(-half);
    //console.log(demand_val);
    //console.log(production_val);



    //console.log(val_arr)
    /*var arrayLength = val.length;
    for (var i = 0; i < arrayLength; i++) {
        if(val[i] != ''){
            console.log("W okresie " + (val.indexOf(val[i])+1) + " należy wyprodukować " + val[i] + " łóżek");
        }
    }*/
}
const input = document.getElementById("in_stock");
//console.log(document.getElementById("in_stock").value);

input.addEventListener('input', GHP_available);

var available_arr;

function GHP_available(e) {
    GHP_iterate();
    
    var count = 20;
    /*
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        console.log(demand_val[i]);
        console.log(production_val[i])
    }
    */
    var stock = input.value
    var table=document.getElementById("ghp_table");
    available_arr = [];
    for (var r = 3, row; row = table.rows[r];) {
            for (var c = 1, cell; cell = row.cells[c]; c++) {
                while (count <= 30){
                    count++
                    //console.log(demand_val[count-21]);
                    //console.log(production_val[count-21]);
                    //document.getElementById("test"+ count).value = stock;
                    
                    if(demand_val[count-21]>0 && production_val[count-21]==0){
                        stock = parseInt(stock) - parseInt(demand_val[count-21]);
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                        
                        /*
                        if(stock<0){
                            alert("Proszę sprawdić czy wszystkie wartości się zgadzają");
                            break;
                            
                        }
                        */
                    }
                    else if(demand_val[count-21]==0 && production_val[count-21]>0){
                        stock = parseInt(stock) + parseInt(production_val[count-21]);
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                        
                        /*
                        if(stock<0){
                            alert("Proszę sprawdić czy wszystkie wartości się zgadzają");
                            break;
                        }
                        */
                    }
                    else if(demand_val[count-21]>0 && production_val[count-21]>0){
                        stock = (parseInt(stock) + parseInt(production_val[count-21])) - parseInt(demand_val[count-21]);
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                        
                        /*
                        if(stock<0){
                            alert("Proszę sprawdić czy wszystkie wartości się zgadzają");
                            break;
                        }
                        */
                    }
                    else{
                        document.getElementById("test"+ count).value = stock;
                        available_arr.push(stock);
                        
                        /*
                        if(stock<0){
                            alert("Proszę sprawdić czy wszystkie wartości się zgadzają");
                            break;
                        }
                        */
                    
                    }
                }
            }
        } 
    }

function check_values(){
    //show();
    
    if(available_arr.every(v => v >= 0)){
        show();
    }
    else{
        alert("Proszę sprawdzić czy wszystkie wartości są odpowiednio podane!")
    }
    
}





