try{
    let a = 0;
    
    console.log(time);
    //this gives an error
}
catch(err){
    console.log(err);

    console.log(hello);
    //this statament also gives an error
}
finally{
    console.log("Hello world");
}
// finally clause runs even if the catch block has error or there is a return statement in try block