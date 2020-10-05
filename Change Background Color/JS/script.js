const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('.body');

const colors = ['yellow', 'red', 'green', '#e3dd84'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bodyBg.style.backgroundColor = colors[random];
}