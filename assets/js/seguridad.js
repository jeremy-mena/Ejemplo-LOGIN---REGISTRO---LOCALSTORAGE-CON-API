
var session = localStorage.getItem("x");
console.log(session)

if(session == null){
    alert("Debe iniciar sessión")
    window.location = "index.html"
}
else{
    alert("Hola " + session)
}
