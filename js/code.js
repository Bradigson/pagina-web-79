let btn1 = document.querySelector("#boton");
let Alert = document.querySelector(".alert");
let p = document.querySelector("#p-alert");
btn1.onclick = function(){
    let resultAlphabet = document.querySelector("#resultado");
    let inputLetter = document.querySelector("#inputLetter");
    
   
    if(!/^[0-9]+$/.test(inputLetter.value)){
        
        Alert.style.display="flex";
        p.textContent = "Debe de ingresar un Numero y No se permiten letras";
        resultAlphabet.textContent = "";
      
        
    }else{
        let alphabet = ['A','B','C','D','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R',
    'S','T','U','V','W','X','Y','Z'];

    let random = Math.floor(Math.random() * alphabet.length);
    resultAlphabet.textContent =  alphabet[random];
    }

    inputLetter.value="";
}


let Close = document.querySelector("#X-alert");
Close.addEventListener("click", ()=>{

    Alert.style.display="none";
    
});

//========================efectpo  parallax=========================
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}




