// Init AOS
function aos_init() {
  AOS.init({
    duration: 1500,
      easing: "ease-in-out-back",
        once: true
      });
}
  $(window).on('load', function() {
    aos_init();
  }); 



  