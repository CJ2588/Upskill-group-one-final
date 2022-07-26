
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

//This is to toggle the menu btn
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('open')
})