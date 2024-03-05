let img = document.querySelector('.main-img');
let container = document.querySelector('.container')
let button = document.querySelector('.butcolor');
function phones(phone){
    img.src = phone;
}

function colors(color){
    container.style.background = color;
}
function backs(back){
    butcolor.style.background = back;
}