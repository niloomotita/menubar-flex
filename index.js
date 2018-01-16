const btn = document.querySelector("#tgl");
const menu = document.querySelector('#menu');
const close = document.querySelector('#close')

btn.addEventListener('click',()=>{
    btn.style.display = 'none';
    menu.style.display = 'block';
    close.style.display = 'block'
})

close.addEventListener('click', ()=>{
    close.style.display = 'none';
    btn.style.display = 'block';
    menu.style.display = 'none';
})