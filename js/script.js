let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });
  
  var swiper = new Swiper(".review-slider", {
      slidesPerView: 1,
      grabCursor: true,
      loop:true,
      spaceBetween: 10,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1050: {
          slidesPerView: 3,
        },    
      },
      autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    }
  });