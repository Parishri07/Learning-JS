//loadscript function using promises 

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(src);
        }
        document.body.append(script);
    })
}


//using .then()
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
a.then((value) => {
    console.log(value)
    console.log("Load is complete")
})


//using async await syntax
// const mainLogic = async ()=>{
//    console.log(new Date().getMilliseconds())
//    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
//    console.log(a)
//    console.log(new Date().getMilliseconds())
// }
// mainLogic();