document.getElementById("btn").onclick = enviar;
let info = document.querySelector(".info");
let infoNumero = document.querySelector(".info-numero");
let privacidad = document.querySelector(".privacidad-parrafo");
let respuesta = 1;
let respuestaDos = 1;
leerMas();

const persona = {
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    pais: "",
    empresa: "",
    ocupacion: "",
    genero: "",
    edad: null,
    telefono: null
}

function enviar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const pais = document.getElementById("pais").value;
    const empresa = document.getElementById("empresa").value;
    const ocupacion = document.getElementById("ocupacion").value;
    const genero = document.getElementById("genero").value;
    const edad = document.getElementById("edad").value;
    const telefono = document.getElementById("telefono").value;

    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.correo = correo;
    persona.contraseña = contraseña;
    persona.pais = pais;
    persona.empresa = empresa;
    persona.ocupacion = ocupacion;
    persona.genero = genero;
    persona.edad = edad;


    if (respuesta == 1) {
        respuesta++;
        let regex = /^(?:(?:\+|00)34[\s\.\-\_]?)?(?:\d[\s\.\-\_]?){9}$/;
        if (regex.test(telefono)) {
            infoNumero.insertAdjacentHTML("beforeend", `<div class="green">El número de teléfono es válido</div>`);
        } else {
            infoNumero.insertAdjacentHTML("beforeend", `<div class="red">El número de teléfono no es válido</div>`);
        }
    }

    if (respuestaDos == 1) {
        respuestaDos++;
        if (!nombre || !apellido || !correo || !contraseña || !pais || !empresa || !ocupacion || !genero
            || !edad) {
            info.insertAdjacentHTML("beforeend", `<div class="red">No has completado el formulario</div>`);
        } else {
            info.insertAdjacentHTML("beforeend", `<div class="green">Has completado el formulario</div>`);
            borrarInputs();
        }
    }
}

function borrarInputs() {
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("ocupacion").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("telefono").value = "";
}

function leerMas() {
    if (privacidad.style.display == "none") {
        privacidad.style.display = "block";
    } else {
        privacidad.style.display = "none";
    }
}

function resetear() {
    info.innerHTML = "";
    infoNumero.innerHTML = "";
}