/*
AJAX is acronym or Asynchronous JavaScript And XML

AJAX is used to send and receive data from a server asynchronously
and use this data to update part of the DOM/web page without refreshing the web page.

AJAX can be used to exchange data in XML or JSON format.

The most important object for AJAX is XMLHttpRequest. Use this object to send and receive data.
*/


function ajaxExample () {
    console.clear(); // clear the chrome browser console.
    //
    // Send a request to server.
    //
    // Create an XMLHttpRequest object.
    var xhttp = new XMLHttpRequest();
    // explanation ==> xhttp.open( HTTP METHOD like GET or POST, Server URL, Asynchronous or not)
    xhttp.open('get', 'https://reqres.in/api/users/2', true);
    // send request
    xhttp.send();
    
    //
    // Receive a response from server.
    //
    
    // readyState holds the status of the XMLHttpRequest.
    // onreadystatechange function is invoked every time readyState value changes.
    //
    // readyState == 0 then request not initialized
    // readyState == 1 then server connection established
    // readyState == 2 then request received
    // readyState == 3 then processing request
    // readyState == 4 then request finished and response is ready
    xhttp.onreadystatechange = function () {
        console.log("ReadyState just udpated to: " + this.readyState);
        if (this.readyState === 4 && this.status == 200){
            console.log("Successfully received a response in JSON format from server.");
            console.log(JSON.parse(xhttp.response));
        }
    }
};