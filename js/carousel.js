"use strict";

window.addEventListener('load', function() {
    
    setInterval(addUpClass, 3000);
    
});


let toggle = true;
function addUpClass(){
    const slides = document.getElementsByClassName('slide');
    
    for(let i=0; i<slides.length; i++){
        if(toggle){
            if(i%2!==0){
            slides[i].classList.add('up', 'animate');
            }else{
                slides[i].classList.remove('up', 'animate');
            }
        }else{
            if(i%2===0){
            slides[i].classList.add('up', 'animate');
            }else{
                slides[i].classList.remove('up', 'animate');
            }
        }
    }
    
    toggle = !toggle;
}