const mobile_count = 2;
const desktop_count = 4;
const dot = document.querySelector("svg.dot");
let count = desktop_count;

function resize(){
  let width = document.querySelector(".slide.active").clientWidth;
  document.querySelectorAll(".slide").forEach(element => element.style.height = width + "px");
}

function init(){
  dot.remove();

  function updateView(){
    if (window.outerWidth <= 425){
      count = mobile_count;
    }
    document.querySelectorAll(".slide.active").forEach(element => element.classList.remove('active'));
    document.querySelectorAll(".dot").forEach(element => element.remove());
    
    let slides = document.querySelectorAll(".slide");

    for(let i = 0; i < slides.length; i++){
      document.querySelector(".dots").appendChild(dot.cloneNode(true));
    }

    let dots = document.querySelectorAll(".dot");

    for(let i = 0; i < Math.min(count, slides.length); i++){
      slides[i].classList.add('active');
      dots[i].classList.add('active-dot');
    }
    resize();
  }

  updateView();
}
function back_slide(){
  let slider = document.querySelector(".slides");
  let last_slide = slider.querySelector('.slide:last-child');
  last_slide.remove();
  slider.insertBefore(last_slide, slider.querySelector('.slide'));

  document.querySelectorAll(".slide.active").forEach(element => element.classList.remove('active'));

  let slides = document.querySelectorAll(".slide");
  for(let i = 0; i < Math.min(count, slides.length); i++){
    slides[i].classList.add('active');
  }

  let dots = document.querySelectorAll(".dot");
  
  let last_active_dot;
  for(let i = 0; i < dots.length - 1; i++){
    if (dots[i].classList.contains("active-dot") && !dots[i + 1].classList.contains("active-dot")){
      last_active_dot = dots[i];
      break;
    }
  }
  let first_active_dot;
  for(let i = dots.length - 1; i > 0; i--){
    if (dots[i].classList.contains("active-dot") && !dots[i - 1].classList.contains("active-dot")){
      console.log(i);
      first_active_dot = dots[i];
      break;
    }
  }

  if (last_active_dot){
    last_active_dot.classList.remove("active-dot");
  } else {
    dots[dots.length - 1].classList.remove("active-dot");
  }

  if (first_active_dot && first_active_dot.previousElementSibling){
    first_active_dot.previousElementSibling.classList.add("active-dot");
  } else {
    dots[dots.length - 1].classList.add("active-dot");
  }
}

function forward_slide(){
  let slider = document.querySelector(".slides");
  let first_slide = slider.querySelector('.slide');
  first_slide.remove();
  slider.appendChild(first_slide);

  document.querySelectorAll(".slide.active").forEach(element => element.classList.remove('active'));

  let slides = document.querySelectorAll(".slide");
  for(let i = 0; i < Math.min(count, slides.length); i++){
    slides[i].classList.add('active');
  }

  let dots = document.querySelectorAll(".dot");
  
  let last_active_dot;
  for(let i = 0; i < dots.length - 1; i++){
    if (dots[i].classList.contains("active-dot") && !dots[i + 1].classList.contains("active-dot")){
      last_active_dot = dots[i];
      break;
    }
  }
  let first_active_dot;
  for(let i = dots.length - 1; i > 0; i--){
    if (dots[i].classList.contains("active-dot") && !dots[i - 1].classList.contains("active-dot")){
      console.log(i);
      first_active_dot = dots[i];
      break;
    }
  }

  if (last_active_dot && last_active_dot.nextElementSibling){
    last_active_dot.nextElementSibling.classList.add("active-dot");
  } else {
    dots[0].classList.add("active-dot");
  }

  if (first_active_dot){
    first_active_dot.classList.remove("active-dot");
  } else {
    dots[0].classList.remove("active-dot");
  }
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resize, true);


function ready() {
    console.log("DOM is ready");
}

document.addEventListener("DOMContentLoaded",ready);
