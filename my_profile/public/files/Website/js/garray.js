// DOMが完全に読み込まれた後に実行する
document.addEventListener("DOMContentLoaded", () => {
    // 画像のパスを格納する配列
    const images = [
      "./images/sadokin.jpg",
      "./images/sadosyoku.jpg",
      "./images/sadoumi.jpg",
    ];
  
    // 現在の画像インデックス
    let currentImageIndex = 0;
  
    // ギャラリー要素を取得
    const gallery = document.getElementById("gallery");
  
    // ギャラリー要素が存在する場合に処理を実行
    if (gallery) {
      // 画像を切り替える関数
      function updateBackgroundImage() {
        gallery.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
      }
  
      // 初期背景画像を設定
      updateBackgroundImage();
  
      // 3秒ごとに画像を切り替え
      setInterval(updateBackgroundImage, 3000);
    }
  });
  