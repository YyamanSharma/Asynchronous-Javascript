/*
In JS, We can pass functions as arguements.
The functions passed as arguements are called callback functions
As Named, these functions are called back sometime in future and thus provide asynchronous behaviour
We just provide the reference of callback in the function we put it as arguement
Callback are saved in a separate memory space 
*/

//using the XmlHttpRequest and extending to callbacks

/*
Passed a callback function in gettodos
*/

getTodos = (callback) => {
    const requestObject = new XMLHttpRequest();

    requestObject.open('GET', "https://jsonplaceholder.typicode.com/todos")
    requestObject.send();

    requestObject.addEventListener('readystatechange', () => {
        if (requestObject.readyState === 4 && requestObject.status === 200) {
            //JSON response comes as a string, JSON.parse method changes it to objects
            const data = JSON.parse(requestObject.response)
            callback(undefined, data)
        }
        else if (requestObject === 4) {
            callback("Failed to fetch data", undefined)
        }
    })
}

/*
Passed a callback function in gettodos with err and data as arguement
*/

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log("Callback fired")
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
});

console.log(3);
console.log(4);

/*
Asynchronous nature
1
2
3
4
callback fired
response from request
*/

