const hello = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("there is an error"))
        }, 3000)
    })
}
const mainLogic = async () => {
    console.log("entered main function");
    try{
        let a = await hello();
        console.log(a);
    }
    catch(error){
        console.log(error);
    }
    console.log("exiting main function");
}
mainLogic();