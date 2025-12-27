// カルーセル  -Slick recipe-
$('.voices-slick').slick({
  infinite: true,
  dots: true,
  arrows: true,
  slidesToShow: 1,// SP（スマホ）用：1枚表示
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slide-arrow prev-arrow"><i class="bi bi-arrow-left-short"></i></button>',
  nextArrow: '<button type="button" class="slide-arrow next-arrow"><i class="bi bi-arrow-right-short"></i></button>',
  fade: true,// フェード切り替え不要ならfalse
  mobileFirst: true,
  responsive: [
    // PCの指定
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,// PC用：3枚表示
        slidesToScroll: 3,
        fade: false
      }
    },
  ]
});


// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

  // .hamburgerの表示・非表示を繰り返す
  $(this).toggleClass('icon-active');

});


// スクロールしてページトップへ戻るボタン
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 200) {
    $('#scroll-top-btn').fadeIn();
  } else {
    $('#scroll-top-btn').fadeOut();
  }
});

$('#scroll-top-btn').on('click', function() {
  $('html, body').animate({ scrollTop: 0 }, 500);
});