// textというidを持つHTML要素を取得し、定数に代入する
const Text = document.getElementById('text');
// btnというidをもつHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
    // textを変更する
    Text.textContent = 'ボタンをクリックしました';
});