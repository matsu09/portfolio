$(document).ready(function () {
  $(".hamburger-button").on("click", function () {
    $(".sp-nav").slideToggle();
  });
});



// スライダー（SPのみ初期化、PCでは unslick する）
$(function () {
  var $slider = $('.swiper-wrapper');

  function initOrDestroySlider() {
    var winW = $(window).width();
    if (winW < 768) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          dots: true,
          infinite: true,
          adaptiveHeight: true,
          autoplay: false,
          // autoplay: true,          // 自動再生を有効にする
          autoplaySpeed: 2500,
          arrows: true,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false
        });
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  }

  initOrDestroySlider();

  var resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initOrDestroySlider, 150);
  });
});



$(function () {
  // class="new-window" が付いたリンクを新しいウィンドウで開く
  $('a.new-window').attr({
    target: '_blank',
    rel: 'noopener noreferrer'
  });
});



// ...existing code...

$(function () {
  // モーダル要素を追加
  var modalHtml = ''
    + '<div class="image-modal" aria-hidden="true" tabindex="-1">'
    + '  <div class="image-modal__overlay"></div>'
    + '  <div class="image-modal__content" role="dialog" aria-modal="true">'
    + '    <button class="image-modal__close" aria-label="閉じる">&times;</button>'
    + '    <img src="" alt="">'
    + '  </div>'
    + '</div>';
  $('body').append(modalHtml);

  var $modal = $('.image-modal');
  var $modalImg = $modal.find('img');

    // ...existing code...
  
  $(document).on('click', '.swiper-wrapper img, .works img, .gallery img', function (e) {
    if ($(this).closest('.lp').length) return;
    if ($(window).width() < 768) return;
  
    var $img = $(this);
    var src = $img.attr('src');
    var alt = $img.attr('alt') || '';
    var large = $img.attr('data-large') || null;
    var srcset = $img.attr('srcset') || null;
  
    // srcset をセットまたは削除
    if (srcset) {
      $modalImg.attr('srcset', srcset);
    } else {
      $modalImg.removeAttr('srcset');
    }
  
    // data-large を優先
    if (large) {
      $modalImg.attr('src', large);
    } else {
      $modalImg.attr('src', src);
    }
    $modalImg.attr('alt', alt);
  
    $modal.attr('aria-hidden', 'false').addClass('is-open');
    $('body').css('overflow', 'hidden');
    $modal.focus();
  });
  
  // ...existing code...


  // 閉じる処理
  function closeModal() {
    $modal.attr('aria-hidden', 'true').removeClass('is-open');
    $modalImg.attr('src', '');
    $('body').css('overflow', '');
  }

  // オーバーレイ／閉じるボタンで閉じる
  $modal.on('click', '.image-modal__overlay, .image-modal__close', closeModal);

  // ESCキーで閉じる
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $modal.hasClass('is-open')) {
      closeModal();
    }
  });

  // リサイズで SP に切り替わったらモーダルを閉じる
  $(window).on('resize', function () {
    if ($(window).width() < 768 && $modal.hasClass('is-open')) {
      closeModal();
    }
  });
});

