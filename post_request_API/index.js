const createTodo = async (todo) =>{
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },  
        body: JSON.stringify(todo),
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

const getTodo = async (id) =>{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let r = await response.json()
  return r
}

const mainFunc = async () =>{
    let todo = {
         title: 'Good',
         body:'day',
         userId: 101,
    }
    let mftodo = await createTodo(todo);
    console.log(mftodo);
    console.log(await getTodo(23))
}
mainFunc();