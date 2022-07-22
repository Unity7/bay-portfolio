//When website is finished loading execute the following code ** activate superslides
$(document).ready(function () {
  //superslides init
  $("#slides").superslides({
    animation: "fade",
    play: 3000,
    pagination: false,
  });

  //typed init
  var typed = new Typed(".typed", {
    strings: ["Full Stack Web Developer", "Web3 Developer", "Data Analyst"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  //owl carousel init
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  //easy chart init
  $(".chart").easyPieChart({
    easing: "easeInOut",
    barColor: "#fff",
    trackColor: false,
    scaleColor: false,
    lineWidth: 4,
    size: 152,
    onStep: function (from, to, percent) {
      $(this.el).find(".percent").text(Math.round(percent));
    },
  });
});
