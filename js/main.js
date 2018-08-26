'use strict';

jQuery('#menu').metisMenu().show();

var region = new XMLHttpRequest();
var value = new XMLHttpRequest();
var lObj;
var vObj;

//Price
region.open('GET','../test/HousePrices.json',true);
region.responseType = 'text';
region.send();

region.onload = function(){
    if(region.status === 2000){
        lObj = JSON.parse(region.responseText);
        console.log(lObj);
    }
};

//value
value.open('','',true);
value.responseType = 'text';
value.send();

value.onload = function(){
    if(value.status === 200){
        fObj = JSON.parse(value.responseText);
        console.log(vObj);
    }
};

function display(x){
    console.log(x);
    document.getElementById('region').innerHTML = region[x].region;
    document.getElementById('value').innerHTML = region[x].value;
    // document.getElementById('photo').src = hotelInfo[x].photo;
    // document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday;
    // document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend;

    // details = "";
    // for(i=0; i<hotelInfo[x].details.length; i++){
    //     console.log(hotelInfo[x].details[i]);
    //     details += "<p>"+hotelInfo[x].details[i]+"</p>";
    // }
    // document.getElementById('details').innerHTML = detail;
}