const request = new XMLHttpRequest();
var APIKey = "ZC5iKcDhLMPPAuLuEbUpWkyinJXO3N99M2qpXhIe";
const url = "http://api.rit.edu/v1/buildings/3,7A/meetings?date=2014-09-03&RITAuthorization=1973f96d944ea41d94950355261e61231236d3d76e";

request.open('GET', url)
request.responseType = 'json';
request.send()

request.onload = function(){
    var responseObj = request.response;
    alert(responseObj.message + "hello");
}