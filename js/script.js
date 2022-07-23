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

  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
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
    }
  });

  $(window).scroll(function () {
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 300
    ) {
      $(".counter").each(function () {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  //fancy box init
  $("[data-fancybox]").fancybox();

  //isotype filter init
  $(".items").isotope({
    filter: "*",
    animationOptions: { duration: 1500, easing: "linear", queue: false },
  });
});
