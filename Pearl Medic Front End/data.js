let itemnav = document.querySelector("#nav_items");
let opennavbtn = document.querySelector("#open-nav-btn");
let closenavbtn = document.querySelector("#close-nav-btn");
let navigationanimation = document.getElementById('nav_all');


opennavbtn.addEventListener('click', () => {
  itemnav.style.display = 'flex';
  opennavbtn.style.display = 'none';
  closenavbtn.style.display = 'inline-block';
})
closenavbtn.addEventListener('click', () => {
  itemnav.style.display = 'none';
  closenavbtn.style.display = 'none';
  opennavbtn.style.display = 'inline-block';


})
window.addEventListener('scroll', () => {
  navigationanimation.classList.toggle('shadow', window.scrollY > 0)
});
// // menutup menu nav ketika x ditekan
// if(window.innerWidth < 1024){
//   document.querySelectorAll('#nav_items li a').forEach(itemnav =>{
//     itemnav.addEventListener('click', () =>{
//       itemnav.style.display = 'none';
//       closenavbtn.style.display = 'none';
//       opennavbtn.style.display = 'inline-block';
//     })
//   })
// }



// main background
var swiper = new Swiper(".header", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".layanan_swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

