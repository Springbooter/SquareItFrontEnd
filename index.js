
let numberIdResponse;

sendData = function(){
    const numb = document.getElementById("InDataId").value;

    let numberJson = {
        "number": numb
    };
    
    // send
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            var response = JSON.parse(http.responseText);
            numberIdResponse = response.numberId;
        }
    };
    http.open("POST", "http://localhost:8080/rest/square/number/v1/setNumber", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(numberJson));
}

getData = function(){
    // get
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            var response = JSON.parse(http.responseText);
            document.getElementById("outDataId").value = response.squareDto.number;
        }
    };
    http.open("GET", "http://localhost:8080/rest/square/number/v1/getNumber/" + numberIdResponse, true);
    http.send();
}
