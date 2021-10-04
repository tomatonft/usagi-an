'use strict';

{

  // ハンバーガーメニュー
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const links = document.querySelectorAll("div.overlay a");

  open.addEventListener('click', () => {
   overlay.classList.add('show');
   open.classList.add('hide');

  });

  close.addEventListener('click', () => {
   overlay.classList.remove('show');
   open.classList.remove('hide');
  });

 
  

  document.querySelectorAll('div.overlay a')[0].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[1].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[2].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[3].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[4].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
//  カルーセル
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const ul = document.getElementById('photos');
const slides = ul.children;
const dots = [];
let currentIndex = 0;

function updateButtons(){
  prev.classList.remove('hidden');
  next.classList.remove('hidden');

  if(currentIndex === 0){
    prev.classList.add('hidden');
   }
  if(currentIndex === slides.length - 1){
    next.classList.add('hidden');
   }
  }

  function moveSlides(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }
 

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots(){
      dots.forEach(dot => {
      dot.classList.remove('current');
    });
      dots[currentIndex].classList.add('current');
  }

updateButtons();
setupDots();

next.addEventListener('click', () => {
  currentIndex++;
  updateButtons();
  updateDots();
  moveSlides();
});

prev.addEventListener('click', () => {
  currentIndex--;
  updateButtons();
  updateDots();
  moveSlides();
});

window.addEventListener('resize', () => {
  moveSlides();
});

// 交差監視API

function callback(entries, obs){
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    }
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}

const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('.animate');

targets.forEach(target =>{
  observer.observe(target);
});


}