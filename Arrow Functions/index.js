const sayHello = name => console.log("Hello " + name)

const x = {
    name: "Neil",
    role: "JS Developer",
    exp: 30,
    show: function () {
        // let that = this
        // console.log(this)
        setTimeout(() => {
            //inside the arrow function, this is not the window object, this is the one in lexical environment
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)
    }
}
sayHello("Piyush")