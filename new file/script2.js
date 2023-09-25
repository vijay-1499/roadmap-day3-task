var allNations = new XMLHttpRequest();
allNations.open("GET","https://restcountries.com/v3.1/all" );
allNations.send();
allNations.onload = function(){
    var result = JSON.parse(allNations.response)
console.log(result)
 for (var i = 0; i < result.length; i++) {
 //its not proper to understanding for viewer so i added countrys name and 
    var countryName = result[i].name.common;
    var flags = result[i].flags.png
    console.log(countryName)
    console.log(flags)
 }
}