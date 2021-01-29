const menuToggle = document.querySelector('.toggle');

const Show = document.querySelector('.show');


menuToggle.addEventListener('click',function(){

menuToggle.classList.toggle('active');
Show.classList.toggle('active')

});