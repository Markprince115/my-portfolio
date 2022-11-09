// Init AOS
function aos_init() {
  AOS.init({
    duration: 2000,
      easing: "ease-in-out-back",
        once: true
      });
}
$(window).on('load', function() {
    aos_init();
}); 



// change header background color on scroll
  let Header = document.querySelector('#header');
  let Container = document.querySelector('.container')

  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
      Header.classList.add('header_scrolled')
      Container.style.color = "#000"
    }
    else{
      Header.classList.remove('header_scrolled')
      Container.style.color = "#fff"
    }
  })