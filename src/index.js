import "./styles.css";
import { greeting } from "./greeting.js";
import { initialloadPage } from "./pageloadini.js"; 
import { homeBtn } from "./homebtn.js";
import { menusBtn } from "./menubtn.js";
import { hoursBtn } from "./hoursbtn.js";
import { contactBtn } from "./contactbtn.js";




initialloadPage();

console.log(greeting);

const home_btn = document.querySelector('#home');
const dish_btn = document.querySelector('#dish');
const hours_btn = document.querySelector('#hours');
const contact_btn = document.querySelector('#contact');


home_btn.addEventListener('click', () => {
        
       const content = document.querySelector('#content');
       
       content.replaceChildren();     //or use longer -- content.removeChild(content.firstChild);

       homeBtn();
});

dish_btn.addEventListener('click', () => {
       
       const content = document.querySelector('#content');  
         
       content.replaceChildren();    
          
       menusBtn();
});

hours_btn.addEventListener('click', () => {
       
       const content = document.querySelector('#content');  
         
       content.replaceChildren();     // used same func in etch-a-sketch.
       hoursBtn();
});

contact_btn.addEventListener('click', () => {
       
       const content = document.querySelector('#content');  
         
       content.replaceChildren();     
          
       contactBtn();
});




