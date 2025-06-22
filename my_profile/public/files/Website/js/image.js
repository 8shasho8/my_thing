document.addEventListener('DOMContentLoaded', function() {
    // 画像とテキストを含むコンテナを選択
    const imageContainers = document.querySelectorAll('.imageContainer1, .imageContainer2');
  
    // Intersection Observerのオプション設定
    const observerOptions = {
      root: null, // ビューポートが監視対象
      rootMargin: '0px', // 監視範囲のマージン（ビューポートからどれくらい離れると判定するか）
      threshold: 0.5 // 画像が50%表示されたときに発火
    };
  
    // コールバック関数
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 画像コンテナがビューポートに入ったときにvisibleクラスを追加
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // 一度出現したら監視を停止
        }
      });
    };
  
    // Intersection Observerの作成
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // 監視対象に画像コンテナを設定
    imageContainers.forEach(container => {
      observer.observe(container);
    });
  });
  