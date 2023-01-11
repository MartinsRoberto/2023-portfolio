const btnMobile = document.querySelector('.btn-mobile')
const menuLinks = document.querySelectorAll('.header .menu-link')
const menu = document.querySelector('.menu')

btnMobile.addEventListener('click', () => {
  menu.classList.toggle('active')
})

menuLinks.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.remove('active')
  })
})
function typeWriter(text) {
  const textoArray = text.innerHTML.split('');
  text.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => text.innerHTML += letra, 100 * i);
  });
}

const myNameh1 = document.querySelector('.my-name-h1');
typeWriter(myNameh1);



