let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("kotlin");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("edicion");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("aprender");
        habilidades[8].classList.add("resolucion");
        habilidades[9].classList.add("entusiasmo");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//Contacto
const $form = ariodocument.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch (this.action, {
        method: this.method, 
        body: form, 
        header:{
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarme, te escribire pronto.')
    }
}