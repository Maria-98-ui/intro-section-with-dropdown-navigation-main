'use strict';

const dropdown = document.querySelectorAll('.dropdown');
const dropContent = document.querySelectorAll('dropdown-list');
const icon = document.querySelectorAll('.icon');


// const dropdownIcon = function(){
//     this.classList.toggle('open');

//     if(this.classList.contains('open')){
//         icon.src = './images/icon-arrow-up.svg';
//     }else{
//         icon.src = './images/icon-arrow-down.svg';
//     }

//     console.log("test");
// }

// dropdown.addEventListener('click', function(){

//     dropdown.array.forEach(drp => {
//         drp.classList.toggle('open');

//         if(drp.classList.contains('open')){
//             icon.src = './images/icon-arrow-up.svg';
//         }else{
//             icon.src = './images/icon-arrow-down.svg';
//         }
//     });
    // dropdown.for(drp => {
    //     drp.classList.toggle('open');

    //     if(drp.classList.contains('open')){
    //         icon.src = './images/icon-arrow-up.svg';
    //     }else{
    //         icon.src = './images/icon-arrow-down.svg';
    //     }
    // });
    // this.classList.toggle('open');

    // if(this.classList.contains('open')){
    //     icon.src = './images/icon-arrow-up.svg';
    // }else{
    //     icon.src = './images/icon-arrow-down.svg';
    // }

//});



/*add css classlist to html 


*
 add css toggle to html*/ 

 for(let i =0; i<dropdown.length; i++){
    dropdown[i].addEventListener("click",function(){
        this.classList.remove("dislay");
        this.childNodes[1].classList.toggle("iconRotate");

    });
}

document.addEventListener("click",function(e){
    e.preventDefault();
    for(let i =0; i< dropContent.length; i++){
        if(dropContent[i].classList.contains("displayGrid") == true && e.target !== dropContent[i] && e.target !== dropdown[i]){
            dropContent[i].classList.add("display");
            icon[i].classList.remove("iconRotate");
        }
    }
});