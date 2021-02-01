/*
Async Await is a less cluttered way for async operations
We make a function async by prefixing it with async keyword,
Such a function returns a promise
*/

const getTodos = async () => {
    //fetch returns a promise
    //await stalls the initialization to the variable until the promise is resolved
    const response = await fetch('https://jsonplaceholder.typicode.com/todoss')

    //making our own custom error

    if (response.status !== 200) {
        //throwing an error (an object we made using new keyword)
        //once we throw error, the promise return by function is a rejected one
        throw new Error('cannot fetch data');
    }

    //we need to use the json method to get the data back
    //respnse.json() again gives a promise and we wait till it resolves
    const data = await response.json()

    //returned data is still a promise because an async function always return a promise
    return data

}

//we need to chain .then atleast once to resolve the promise and get data
getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message))


