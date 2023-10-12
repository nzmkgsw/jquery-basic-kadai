$(function() {
  // id属性がchange-colorの要素がクリックされたら、文字色を変更する
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたら、文字内容を変更する
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら、文章がフェードアウトする
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // id属性がfade-inの要素がクリックされたら、文章がフェードインする
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});