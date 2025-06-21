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
      <img src="/profile.jpg" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <p></p>
      </section>

  <section className={styles.skills}>
        <h2>～ユーザー・エクスペリエンス～</h2>
         <section className={styles.profile}>
      <img src="/profile.jpg" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <ul>
          <li>ゲーム</li>
          <li>アーケードゲーム</li>
          <li>動画作成</li>
          <li>野球観戦</li>
          <li>ラーメン巡り</li>
          <li>旅行</li>
        </ul>
      </section>

        <section className={styles.skills}>
        <h2>～ビジネス構築～</h2>
          <section className={styles.profile}>
      <img src="/profile.jpg" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <ul>
          <li>普通自動車免許（MT）</li>
          <li>基本情報技術者（勉強中）</li>
          <li>FP（勉強中）</li>
          <li>マリオカート</li>
        </ul>
      </section>

        <section className={styles.skills}>
        <h2>～データ・サイエンス～</h2>
          <section className={styles.profile}>
      <img src="/profile.jpg" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <ul>
          <li>普通自動車免許（MT）</li>
          <li>基本情報技術者（勉強中）</li>
          <li>FP（勉強中）</li>
          <li>マリオカート</li>
        </ul>
      </section>
    </main>
  );
}
