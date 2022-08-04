var owlSlider = $("#slider");
owlSlider.owlCarousel({
  navigation: true,
  nav: false,
  dots: false,
  autoWidth: true,
  loop: true,
  center: true,
  margin: 0,
  stagePadding: 40,
  items: 1,
  smartSpeed: 500,
  autoplay: true,
});

AOS.init({
  offset: 0,
  duration: 1000,
});

$(".popular-restaurant").on("click", function () {
  $(".popular-restaurant").removeClass("col-lg-4 active").addClass("col-lg-2");
  $(this).removeClass("col-lg-2").addClass("col-lg-4 active");
});
