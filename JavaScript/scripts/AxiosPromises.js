/*
    Axios example.
    We are using axios library to make a GET HTTP/AJAX call to a dummy server.
    the axios.get() function return a promise that is resolved when the server sends back data.

    To use axios we need to import axios script in our HTML page. Like so,
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
 */

function axiosPromisesExample() {
    console.clear();
    
    function axiosExample() {
        var promise = axios.get("https://reqres.in/api/users/2");
        
        promise.then(function(res) {
            console.log("Promise just resolved.");
            console.log((res.data));
        });
    }
    
    console.log("Some synchronous code before");
    axiosExample();
    console.log("Some synchronous code after");
}

