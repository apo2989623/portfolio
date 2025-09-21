const buttons = document.querySelectorAll(".menu_link");
let active = document.querySelector(".active");
const sections = Array.from(document.querySelectorAll("section"));

function apo(){
    const position = window.scrollY; 

   

 
    let targetSection = null;

  
   for (let section of sections){
        const offsetBottom = section.offsetTop + section.offsetHeight;
        if (section.offsetTop <= position && position < offsetBottom) {
           targetSection = section;
           break;
        }
    }
   const index = sections.indexOf(targetSection)
   const  targetButton = buttons[index]
   active.classList.remove("active");
   targetButton.classList.add("active");
   active = targetButton
} 
window.addEventListener("scroll", apo);

