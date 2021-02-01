/*
Sometimes we need to call more than one apis at a time and that too in a sequential manner
we can wait for the previous request to complete and then continue
lets see how it goes !!
*/

getTodos = (todoNumber, callback) => {
    const requestObject = new XMLHttpRequest();

    requestObject.open('GET', `https://jsonplaceholder.typicode.com/todos/${todoNumber}`)
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
fetching todos one after another at a time sequentially after each request is completed
This chaining of callbacks look okay but becomes cumbersome in real life projects and thus called CallbackHell
*/
getTodos(1, (err, data) => {
    console.log(data);
    getTodos(2, (err, data) => {
        console.log(data);
        getTodos(3, (err, data) => {
            console.log(data)
        })
    })
});

