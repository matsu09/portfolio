

$(function () {
  $(".voices-slider").slick({
    arrows: false,
    autoplay: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "8.5%",
    dots: true,

    responsive: [
      {
        breakpoint: 768, // 768px未満で適用
        settings: {
          centerPadding: "8.5%",
        }
      },
      {
        breakpoint: 9999, // 768px以上で適用
        settings: {
          centerPadding: "33.5%", // ←PC用に小さく
          adaptiveHeight: true,

        }
      }
    ]

  });
});