const search = document.querySelector('.search');
const input = document.querySelector('.input');
const buttn = document.querySelector('.btn');

buttn.addEventListener(('click'), () => {
 search.classList.toggle('active');
 input.focus();
});
