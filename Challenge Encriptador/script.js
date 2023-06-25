const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const btnCopiar = document.querySelector('.btn-copiar');

const width = window.innerWidth;

if (width < 1024) {
    mensaje.style.backgroundImage = "none";
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        mensaje.style.fontSize = "1em"
        mensaje.style.textAlign = "left";
        btnCopiar.style.display = "block";
    }
}


const defaultText = "Ningun mensaje fue encontrado";
if (width < 1024 && textArea.value === "") {
    
    mensaje.value = defaultText;
    //mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let arrayCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < arrayCodigo.length; i++){
        if(stringEncriptado.includes(arrayCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1]);
        }
    }
    return stringEncriptado;
}




function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptado) {
    let arrayCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < arrayCodigo.length; i++){
        if(stringDesencriptado.includes(arrayCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(arrayCodigo[i][1], arrayCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}
