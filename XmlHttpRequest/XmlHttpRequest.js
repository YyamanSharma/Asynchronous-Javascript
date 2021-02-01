/*
XML HTTP Request object are used to Interact with server
It was heavily used in AJAX programming
Even though XML is mentioned, It can be used to retrieve any type of document
*/


//Made a request object 
const requestObject = new XMLHttpRequest()

/*
It has some methods built in like open,send etc
Open - Initializes a newly created Request or reinitializes an existing one 
        It takes the method and api end point as arguements
Send - This method sends the request to the server
*/

requestObject.open('GET', "https://jsonplaceholder.typicode.com/todos/1");
requestObject.send();


/*
We made the request and send too, but we would need a mechanism to track the request
A request object goes through 5 states (readyState event) when making request till completion
Value	State	            Description
0	    UNSENT	            Client has been created. open() not called yet.
1	    OPENED	            open() has been called.
2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING	            Downloading; responseText holds partial data.
4	    DONE	            The operation is complete.
An eventhandler called everytime a readyState changes will be viable to track the request
*/

requestObject.addEventListener('readystatechange', () => {

    //readyState 4 will tell us that the request is complete 
    //But we should check for if response status is 200 or not

    if (requestObject.readyState === 4 && requestObject.status === 200) {
        console.log(requestObject, requestObject.readyState, "res")
    }
    else if (requestObject.readyState === 4) {
        console.log("Could not fetch data")
    }

})






