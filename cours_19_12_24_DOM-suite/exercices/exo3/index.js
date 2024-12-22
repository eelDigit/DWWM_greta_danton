const button = document.querySelector('button');
const aside = document.querySelector('aside');

button.addEventListener('click', ()=> {
if(aside.style.display === "none") {
aside.style.display = "block";
}else aside.style.display = "none";
});
