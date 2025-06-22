'use client';

import { Button } from '../../components/component';
import styles from '../../styles/globals.module.css';

export default function campusPage() {
  return (
   
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>大学での学び</h1>
        <p>Campus Learning</p>
      </header>

      <section className={styles.skills}>
        <h2>～コンピュータ・サイエンス～</h2>
        <section className={styles.profile}>
      <img src="/othello.png" alt="プロフィール写真" width="600" height="300" className={styles.avatar}  />
      </section>
      <h3>学習の鍵</h3>
        <p>1年生ではPython・HTML/CSS・Javscriptの勉強とPythonフレームワークのDjangoを用いてバックエンドの開発を行いました。</p>
      </section>

  <section className={styles.skills}>
        <h2>～ユーザー・エクスペリエンス～</h2>
         <section className={styles.profile}>
      <img src="/island.png" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
      <h3>学習の鍵</h3>
        <ul>
          <li>ユーザー体験</li>
          <li>人間中心設計</li>
          <li>動画作成<a href="/files/hirose_movie.mp4" download>Download</a></li>
          <li>パッケージデザイン設計<a href="/files/tenkai.pdf" download>Download</a></li>
          <li>Webサイトのデザイン作成<a href="/files/Website" download>Download</a></li>
          <li>ポスター作成<a href="/files/poster.pdf" download>Download</a></li>
        </ul>
      </section>

        <section className={styles.skills}>
        <h2>～ビジネス構築～</h2>
         <h3>学習の鍵</h3>
        <ul>
          <li>ロジカルシンキング</li>
          <li>ビジネスフレームワーク</li>
          <li>経営者としてのマインド</li>
          <li>プロジェクトリーダー</li>
          <li>知的財産を活用した経営戦略</li>
          <li>会計</li>
        </ul>
      </section>

        <section className={styles.skills}>
        <h2>～データ・サイエンス～</h2>
      <h3>学習の鍵</h3>
        <ul>
          <li>顧客マーケティングデータ</li>
          <li>検定統計量</li>
          <li>機械学習</li>
          <li>jupyter lab</li>
          <li>kaggle</li>
        </ul>
      </section>

        <section className={styles.skills}>
        <h2>～経済学～</h2>
      <h3>学習の鍵</h3>
        <ul>
          <li>ミクロ経済学</li>
          <li>マクロ経済学</li>
          <li>金融論</li>
          <li>国際経済学</li>
        </ul>
      </section>

    </main>
  );
}
