var request = new XMLHttpRequest();
var APIKey = "ZC5iKcDhLMPPAuLuEbUpWkyinJXO3N99M2qpXhIe";
const url = "http://api.rit.edu/v1/RITAuthorization=1973f96d944ea41d94950355261e61231236d3d76e";

function testThing(){
    alert("API Alert");
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var responseObj = request.response;
        alert(responseObj.message + "hello");
    }
}