$(function(){
  $(window).on('load scroll', (e) => {
    // HTMLドキュメントの読み込みが完了したとき
    if(e.type === 'load') {
      console.log('loadイベントが発生しました');
    }
    // 画面がスクロースされたとき
    if(e.type === 'scroll') {
      console.log('scrollイベントが発生しました');
    }
  });
});