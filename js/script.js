const btnMobile = document.querySelector('.btn-mobile')

btnMobile.addEventListener('click', () => {
  const menu = document.querySelector('.menu')
  
  menu.classList.toggle('active')
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



