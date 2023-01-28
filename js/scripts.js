$("#repairButton").on("click", function () {
  $("#repairModal").modal();
});

$(".labelYes").on("click", function () {
  $(this).addClass("activated");
  $(".labelNo").removeClass("activated");
});

$(".labelNo").on("click", function () {
  $(this).addClass("activated");
  $(".labelYes").removeClass("activated");
});

let carouselWidth;
let cardWidth;
let scrollPosition = 0;
let numberOfCards = 3;

$("#control-next").on("click", function () {
  cardWidth = $(".carousel-item").width();
  carouselWidth = $(".carousel-inner")[0].scrollWidth;

  if (scrollPosition < carouselWidth - cardWidth * numberOfCards) {
    scrollPosition += cardWidth;
  } else {
    scrollPosition = 0;
  }
  $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 1000);
});

$("#control-prev").on("click", function () {
  cardWidth = $(".carousel-item").width();
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
  } else {
    scrollPosition = carouselWidth - cardWidth * numberOfCards;
  }
  $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 1000);
});
