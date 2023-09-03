let p = fetch('https://random.dog/woof.json')
//without options, it becomes a get request

p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
    //either response.json() or response.text()
}).then((response) => {
    console.log(response)
})
