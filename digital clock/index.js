function change(){
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    
    var time = hours +":"+ minutes +":"+ seconds;
    document.getElementsByClassName("container")[0].innerHTML = time;
}
setInterval(change, 1000);
