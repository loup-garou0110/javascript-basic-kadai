$(function () {
  // ボタンをクリックするイベント処理
  $('.btn').on('click', () => {
    // text-boxに出力
    $('.text-box').val('クリックしました！');
  });
});