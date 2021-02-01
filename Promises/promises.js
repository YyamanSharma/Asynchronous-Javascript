/*

A promise in JS is to make a promise to do something asynchronously
When the task completes, you either fulfill promise or fail
Promise is a constructer function and hence needs new keyowrd to create one
Promise takes a callback function with resolve and reject parameters
It runs resolve when success else runs reject
A promise is run as soon as its created, hence we wrap it in a function and call that function to execute promise

*/

getData = (todoNumber) => {
    //create a promise object with callback function and resolve,reject parameters
    const promiseObject = new Promise((resolve, reject) => {
        //do all the tasks
        const requestObject = new XMLHttpRequest()
        requestObject.open('GET', `https://jsonplaceholder.typicode.com/todos/${todoNumber}`);
        requestObject.send();

        requestObject.addEventListener('readystatechange', () => {
            if (requestObject.readyState === 4 && requestObject.status === 200) {
                const data = JSON.parse(requestObject.response)
                //call the reolve function
                resolve(data)
            }
            else if (requestObject === 4) {
                //call the reject function
                reject("Error getting Resource")
            }
        })
    })
    //return promise
    return promiseObject
}

/*
After Request is handled, need to do something with response from server
then method is on promise object which runs after a promise is fulfilled with resolve
It takes a call back function which fires immediately after resolve
catch method is on promise object which runs after a promise is fulfilled with reject
It takes a call back function which fires immediately after reject
*/

getData(1)
    .then(data => {
        console.log("Promise Resolved:", data)
    })
    .catch(err => {
        console.log("Promise Rejected:", err)
    })


/*
Promise Chaining
With promise chaining, we can do multiple calls and escape callback hell
*/
getData(1).then(data => {
    console.log("Promise 1 resolved:", data)
    //return getData(2) is itself returns a new promise which can be chained with then to get subsequent data
    return getData(2)
}).then(data => {
    console.log("Promise 2 resolved:", data)
    return getData(3)
}).then(data => {
    console.log("Promise 3 resolved:", data)
}).catch(err => {
    //A single catch can caught the error and log it
    console.log("Caught Error:", err)
})
