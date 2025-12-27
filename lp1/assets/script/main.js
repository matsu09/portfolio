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



$(function () {
  // ハンバーガーメニュー内リンクをクリックで実行
  $(".drawer__nav__link").click(function () {
    $(".hamburger-button").removeClass("hamburger-menu-active");
    $(".header-nav").removeClass("hamburger-menu-active");
  });
  // function
});


// スマートタブ
$('#smarttab').smartTab({
  enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});


// スクロールに付随したフェードイン
$('.js-fadein-left').waypoint({
  handler: function (direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});
$('.js-fadein-right').waypoint({
  handler: function (direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// スムーススクロール
jQuery(function () {
  //#で始まるスタート地点をクリックしたときの処理
  jQuery('a[href^="#"]').click(function () {
    // スクロールの高さをheaderの高さに合わせる
    var adjust = $( 'header' ).outerHeight();

    //スクロールのスピード
    var speed = 800;
    //スタート地点の値
    var href = jQuery(this).attr("href");
    //ゴール地点の値
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    //ゴール地点を数値として取得
    var position = target.offset().top - adjust;
    jQuery('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});