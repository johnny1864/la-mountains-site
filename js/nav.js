"use strict";

window.addEventListener('load', function () {

    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let distanceScrolled = window.scrollY;

        if (distanceScrolled > 75) {
            header.classList.add('scroll-nav');
        }else {
            header.classList.remove('scroll-nav');
        }
    })

}); // END OF LOAD FUNCTION
