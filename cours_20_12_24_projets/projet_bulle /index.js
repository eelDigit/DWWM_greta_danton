
let counter = 0;
// creation d'un générateur de bulle____
const bubbleMaker = () => {
    const bubble = document.createElement("span");//creation d'un span
    const counterDisplay =  document.querySelector("h3");
    
    document.body.appendChild(bubble);// inject le span dans le body du html
    const size = Math.random() * 200 + 100 + "px";
    bubble.classList.add("bubble");
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random( ) * 100 +"%"
    
    
    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    } )
    
    setTimeout( () => {
        bubble.remove();
    },8000 );
}

setInterval(() => {
    bubbleMaker();  
},2000 );

