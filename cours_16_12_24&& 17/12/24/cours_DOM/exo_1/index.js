const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const message = document.getElementById("message");

btn1.addEventListener("click", () => {
    message.textContent = "Mauvaise réponse";
    message.style.color = "red";
})
btn2.addEventListener("click", () => {
    message.textContent = "Mauvaise réponse";
    message.style.color = "red";
})
btn3.addEventListener("click", () => {
    message.textContent = "Bonne réponse";
    message.style.color = "green";
})
btn4.addEventListener("click", () => {
    message.textContent = "Les choix sont désactivés";
    message.style.color = "black";
btn1.disabled = true;
btn2.disabled = true;
btn3.disabled = true;

})

btn1.addEventListener("click", () => {
    // document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace()}</pre>`;
    document.documentElement.innerHTML = `  <h2> test </h2> `;
      
})