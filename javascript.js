const botonEncriptar= document.querySelector(".boton-encriptar");
const texEncriptar = document.querySelector(".encriptar")
const exclamacion = document.querySelector(".texto-exclamacion")
const resultado = document.querySelector(".evaluar");
const contenido = document.querySelector(".resultado-contenedor");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");

botonEncriptar.addEventListener( "click", e=>{
    e.preventDefault(); 
    let texto = texEncriptar.value;
    let txt =texto.normalize("NFD").replace(/[$\.¿\?~\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto=="") {
        exclamacion.style.background = "#710a0a";
        exclamacion.style.color ="#FFFFFF";
        exclamacion.style.fontWeight ="800";
        exclamacion.textContent ="El campo de texto no debe estar vacio";

        setTimeout(()=>{
            exclamacion.removeAttribute("style");
            exclamacion.textContent = "Solo letras minúsculas y sin acentos";
        },2000 );
        texEncriptar.value = "";
    }
    else if (texto !== txt){
        exclamacion.style.background = "#710a0a";
        exclamacion.style.color ="#FFFFFF";
        exclamacion.style.fontWeight ="800";
        exclamacion.textContent ="No debe contener acentos y caracteres especiales";

        setTimeout(()=>{
            exclamacion.removeAttribute("style");
            exclamacion.textContent = "Solo letras minúsculas y sin acentos";
        },2000 );
        texEncriptar.value = "";
    }
    else if(texto !== texto.toLowerCase()){
        exclamacion.style.background = "#710a0a";
        exclamacion.style.color ="#FFFFFF";
        exclamacion.style.fontWeight ="800";
        exclamacion.textContent ="El texto debe ser todo en minúscula";

        setTimeout(()=>{
            exclamacion.removeAttribute("style");
            exclamacion.textContent = "Solo letras minúsculas y sin acentos";
        },2000 );
        texEncriptar.value = "";
        
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resultado.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
        texEncriptar.value = "";  
    }
});

botonDesencriptar.addEventListener( "click", e=>{
    e.preventDefault(); 
    let texto = texEncriptar.value;
    let txt =texto.normalize("NFD").replace(/[$\.¿\?~\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto=="") {
        exclamacion.style.background = "#710a0a";
        exclamacion.style.color ="#FFFFFF";
        exclamacion.style.fontWeight ="800";
        exclamacion.textContent ="El campo de texto no debe estar vacio";

        setTimeout(()=>{
            exclamacion.removeAttribute("style");
            exclamacion.textContent = "Solo letras minúsculas y sin acentos";
        },2000 );

    }
    else if (texto !== txt){
        exclamacion.style.background = "#710a0a";
        exclamacion.style.color ="#FFFFFF";
        exclamacion.style.fontWeight ="800";
        exclamacion.textContent ="No debe contener acentos y caracteres especiales";

        setTimeout(()=>{
            exclamacion.removeAttribute("style");
            exclamacion.textContent = "Solo letras minúsculas y sin acentos";
        },2000 );
    }
    else if(texto !== texto.toLowerCase()){
        exclamacion.style.background = "#710a0a";
        exclamacion.style.color ="#FFFFFF";
        exclamacion.style.fontWeight ="800";
        exclamacion.textContent ="El texto debe ser todo en minúscula";

        setTimeout(()=>{
            exclamacion.removeAttribute("style");
            exclamacion.textContent = "Solo letras minúsculas y sin acentos";
        },2000 );
        
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resultado.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
        texEncriptar.value = "";
        
    }
});

botonCopiar.addEventListener( "click", e=>{
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand('copy');
});