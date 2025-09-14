const buttons = document.querySelectorAll(".menu_link");
const active = document.querySelector(".active");
const sections = document.querySelectorAll("section");


function apo(){
    const position = window.scrollY; 
    console.log(position)
   

 
    let targetSection = null;

  
   for (let section of sections){
        const offsetBottom = section.offsetTop + section.offsetHeight;
        if (section.offsetTop < position && position < offsetBottom) {
           targetSection = section;
           break;
        }
    }
    console.log(targetSection);
} 
window.addEventListener("scroll", apo);

