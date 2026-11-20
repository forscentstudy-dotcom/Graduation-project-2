const titleText = "SCENT";
const subText = "Crazy for the World!";
const titleEl = document.getElementById("typing-title");
const subEl = document.getElementById("typing-sub");


let i = 0;
let j = 0;


function typeTitle() {
  titleEl.classList.add("typing-cursor");
  if (i < titleText.length) {
    titleEl.textContent += titleText.charAt(i);
    i++;
    setTimeout(typeTitle, 290); // 1文字ごとの速度（ミリ秒）
  } else {
    titleEl.classList.remove("typing-cursor");
    setTimeout(typeSub, 600); // タイトル完了後にサブタイトルへ
  }
}


function typeSub() {
  subEl.classList.add("typing-cursor");
  if (j < subText.length) {
    subEl.textContent += subText.charAt(j);
    j++;
    setTimeout(typeSub, 150);
  } else {
    // 全部打ち終わったら、少し待ってからリセットして最初からやり直す
    setTimeout(resetTyping, 2000); // 2000ミリ秒（2秒）表示したまま待機
  }
}


function resetTyping() {
  subEl.classList.remove("typing-cursor");
  titleEl.textContent = ""; // タイトルの文字を消す
  subEl.textContent = "";   // サブタイトルの文字を消す
  i = 0;                    // カウントを0に戻す
  j = 0;
  typeTitle();              // 最初からタイピングを再開
}


// ページ読み込み時に実行
window.addEventListener("DOMContentLoaded", typeTitle);





