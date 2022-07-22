//When website is finished loading execute the following code ** activate superslides
$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 3000,
    pagination: false,
  });
  var typed = new Typed(".typed", {
    strings: ["Full Stack Web Developer", "Web3 Developer", "Data Analyst"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
