readTextFile("./HousePrices.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});