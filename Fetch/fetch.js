/*
Fetch API is the new way to make http requests
XmlHttprequest is still there but fetch is the latest addition to the language
With less code, we can make the request now 
Fetch implements promises under the hood which helps to maintain error and response better
*/

/*
Fetch() accepts url as parameter and it returns a promise to us
chaining .then to get the data but the response sent by fetch is structured in a different way
Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), 
and it will only reject on network failure or if anything prevented the request from completing.
*/

fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    /*
    We cant read json bodystream twice, it will throw error
    console.log("response1", response.json())
    json() is used to read response from bodyStream, but it again gives a pending promise
    chaining one more .then provides us the data
    */
    return response.json();
}).then((responsedata) => {
    //we will get the data 
    console.log("final response", responsedata)
}).catch(err => {
    console.log("error", err)
})

