var allNations = new XMLHttpRequest();
allNations.open("GET","https://restcountries.com/v3.1/all" );
allNations.send();
allNations.onload = function(){
    var result = JSON.parse(allNations.response)
console.log(result)
 for (var i = 0; i < result.length; i++) {
    var countryName = result[i].name.common;
    var population = result[i].population;
    var region = result[i].region;
    var subregion = result[i].subregion;
    console.log(countryName);
    console.log(population);
    console.log(region);
    console.log(subregion);
    
}

}

