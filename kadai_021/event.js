// textというidを持つHTML要素を取得し、定数に代入する
const Text = document.getElementById('text');
// btnというidをもつHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
    // 2秒後に表示される処理
    setTimeout(() => {
        // textを変更する
        Text.textContent = 'ボタンをクリックしました';
    }, 2000);
});