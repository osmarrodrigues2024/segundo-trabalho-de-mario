const form =document.querySelector(".formulario-fale-comigo")
const mascara =document.querySelector(".mascara-formulario")

function mostraform(){
    form.style.left ="50%"
    form.style.trasnform ="trasnlatex(-50%)"
    form.style.visibility ="visible"

}
function esconderForm(){
    form.style.left ="-300px"
    form.style.trasnform ="trasnlatex(0)"
    form.style.visibility ="hidden"

}