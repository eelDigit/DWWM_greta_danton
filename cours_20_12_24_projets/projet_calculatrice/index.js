
const buttons = document.querySelectorAll(".btn");
console.log(buttons); 

const result = document.getElementById("result");
console.log(result);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target); 
   
    console.log(e.target.id); 
   
    result.textContent += e.target.id;

 
  });
});

console.log(equal);
equal.addEventListener("click", () => {

  result.textContent = eval(result.textContent);

});
clear.addEventListener("click", (button) => {
  if (result.textContent == 0) {
    button.addEventListener("click", (e) => { });
  } else {
    result.textContent = "";
  }
});

