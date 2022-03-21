function show(){
    document.getElementById("tables").style.display="block";
    MRP_Mapper("lead_time_matt","lot_size_matt","in_stock_matt");
    MRP_Mapper("lead_time_frame","lot_size_frame","in_stock_frame");
    MRP_Mapper("lead_time_boards","lot_size_boards","in_stock_boards");
    MRP_Mapper("lead_time_legs","lot_size_legs","in_stock_legs");
    MRP_Mapper("lead_time_racks","lot_size_racks","in_stock_racks");
    MRP_test();
    /*
    GHP_Map();
    MRP_Materace_Map();
    MRP_Rama_Map();
    MRP_Deski_Map();
    MRP_Nogi_Map();
    MRP_Stelaze_Map();*/
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
}*/

function MRP_Mapper(id1, id2, id3) {
    const Mapp = new Map ([
        ["czas_realizacji", document.getElementById(id1).value],
        ["wielkosc_partii", document.getElementById(id2).value],
        ["na_stanie", document.getElementById(id3).value]
    ])
    console.log(Mapp.get("czas_realizacji")+" "+Mapp.get("wielkosc_partii")+" "+Mapp.get("na_stanie"));
}

/*
function MRP_Materace_Map() {
    const mrp_Materace = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_matt").value],
        ["wielkosc_partii", document.getElementById("lot_size_matt").value],
        ["na_stanie", document.getElementById("in_stock_matt").value]
    ])
    console.log(mrp_Materace.get("czas_realizacji")+" "+mrp_Materace.get("wielkosc_partii")+" "+mrp_Materace.get("na_stanie"));
}


function MRP_Rama_Map() {
    const mrp_Rama = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_frame").value],
        ["wielkosc_partii", document.getElementById("lot_size_frame").value],
        ["na_stanie", document.getElementById("in_stock_frame").value]
    ])
    console.log(mrp_Rama.get("czas_realizacji")+" "+mrp_Rama.get("wielkosc_partii")+" "+mrp_Rama.get("na_stanie"));
}

function MRP_Deski_Map() {
    const mrp_Deski = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_boards").value],
        ["wielkosc_partii", document.getElementById("lot_size_boards").value],
        ["na_stanie", document.getElementById("in_stock_boards").value]
    ])
    console.log(mrp_Deski.get("czas_realizacji")+" "+mrp_Deski.get("wielkosc_partii")+" "+mrp_Deski.get("na_stanie"));
}

function MRP_Nogi_Map() {
    const mrp_Nogi = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_legs").value],
        ["wielkosc_partii", document.getElementById("lot_size_legs").value],
        ["na_stanie", document.getElementById("in_stock_legs").value]
    ])
    console.log(mrp_Nogi.get("czas_realizacji")+" "+mrp_Nogi.get("wielkosc_partii")+" "+mrp_Nogi.get("na_stanie"));
}

function MRP_Stelaze_Map() {
    const mrp_Stelaze = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_racks").value],
        ["wielkosc_partii", document.getElementById("lot_size_racks").value],
        ["na_stanie", document.getElementById("in_stock_racks").value]
    ])
    console.log(mrp_Stelaze.get("czas_realizacji")+" "+mrp_Stelaze.get("wielkosc_partii")+" "+mrp_Stelaze.get("na_stanie"));
}

function MRP_Mapper(id1, id2, id3) {
    const Mapp = new Map ([
        ["czas_realizacji", document.getElementById(id1).value],
        ["wielkosc_partii", document.getElementById(id2).value],
        ["na_stanie", document.getElementById(id3).value]
    ])
    console.log(Mapp.get("czas_realizacji")+" "+Mapp.get("wielkosc_partii")+" "+Mapp.get("na_stanie"));
}*/
function MRP_test() {
    var table=document.getElementById("ghp_table");
    var val = []
    for (var r = 1, row; row = table.rows[r]; r++) {
        if(r<2){
            for (var c = 1, cell; cell = row.cells[c]; c++) {
                val.push(document.getElementById("test"+c).value)
            }
        }
    }
    console.log(val)
    var arrayLength = val.length;
    for (var i = 0; i < arrayLength; i++) {
        if(val[i] != ''){
            console.log(val.indexOf(val[i])+1);
        }
    }
}


