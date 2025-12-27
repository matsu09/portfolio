// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});


// スライダー
$(function(){
  $('.swiper-wrapper').slick({
 dots: true,
 slidesToShow: 1,
 slidesToScroll: 1,
 infinite: true,
  });
});



$('.accordion-title').on('click', function() {
  const $section = $(this).closest('.qanda-section');
  const $content = $section.find('.accordion-content');
  const $accordion = $(this).closest('.accordion');

      // アイコンの切り替え
    var $icon = $(this).find('.bi');
    if ($(this).hasClass('open')) {
      $icon.removeClass('bi-dash').addClass('bi-plus');
    } else {
      $icon.removeClass('bi-plus').addClass('bi-dash');
    }

  // アコーディオン開閉
  $content.slideToggle();
  $(this).toggleClass('open');

  // クラス切り替え
  if ($(this).hasClass('open')) {
    $section.addClass('open-padding');
  } else {
    $section.removeClass('open-padding');
  }
    // どれか一つでも.openがあればopen-gapを付与、なければ外す
  if ($accordion.find('.accordion-title.open').length > 0) {
    $accordion.addClass('open-gap');
  } else {
    $accordion.removeClass('open-gap');
  }
});

