const createTodo = async () =>{
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },  
        body: JSON.stringify({
            title: 'Good',
            body: 'Day',
            userId: 101,
        }),
    }
    //JSON.stringify converts JS object to string
    //JSON.parse converts valid JSON string to JS object
    
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    
    // p.then((response) => {
    //     return response.json()
    // }).then((response) => {
    //     console.log(response)
    // })

    let response = await p.json()
    return response
}

const mainFunc = async () =>{
    let todo = await createTodo();
    console.log(todo);
}
mainFunc();