AOS.init();
new WOW().init();

console.clear();

$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ( scrollTop == 0 ) {
    $('.top-bar').removeClass('follow');
  }
  else {
    $('.top-bar').addClass('follow');
  }
});

$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ($(window).scrollTop() > 2) {
    $('.top-bar-2').addClass('shown');
  }
  else {
    $('.top-bar-2').removeClass('shown');
  }
  
  if ($(window).scrollTop() > 2) {
    $('.top-bar-2').addClass('under-line');
  }
  else {
    $('.top-bar-2').removeClass('under-line');
  }
})


$("body").imagesLoaded(function () {
  setTimeout(function() {
    $('.loading').remove();
    SwiperBox1__init();
  }, 0);
});
