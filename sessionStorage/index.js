//session storage is only for one browser
//data survives page refresh but not closing or opening of tab

// sessionStorage.setItem("name","Kartik Aaryan");
// sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
// sessionStorage.setItem("ID","123345");
// sessionStorage.removeItem("ID");
// sessionStorage.clear()


window.onstorage = (e)=>{
   alert("Changed");
   console.log(e);
}