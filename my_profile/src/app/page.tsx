'use client';

import { Button } from '../components/Mycomponent';
import styles from '../styles/globals.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>廣瀨遥介のポートフォリオ</h1>
        <p> 勉強中</p>
      </header>

      <section className={styles.profile}>
        {/* もしプロフィール画像があればここに */}
        {/* <img src="/profile.jpg" alt="プロフィール写真" className={styles.avatar} /> */}
        <p>
          こんにちは！廣瀬遥介です。Web開発に熱中していて、新しい技術をどんどん取り入れています。
          チーム開発や個人プロジェクトで実績があります。
        </p>
      </section>

      <section className={styles.skills}>
        <h2>スキルセット</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>CSS / SCSS / Tailwind CSS</li>
          <li>Git / GitHub</li>
        </ul>
      </section>

      <section className={styles.projects}>
        <h2>プロジェクト紹介</h2>

        <article className={styles.projectCard}>
          <h3>地域コミュニティアプリ</h3>
          <p>地方創生を支援するためのWebアプリ。商工会との連携で地域活性化を目指しています。</p>
          <Button label="詳細を見る" onClick={() => alert('プロジェクト詳細ページはまだ作成中です')} />
        </article>

        <article className={styles.projectCard}>
          <h3>バイト業務効率化ツール</h3>
          <p>レジ締め作業を自動化し、バイト先の作業時間短縮を実現しました。</p>
          <Button label="詳細を見る" onClick={() => alert('プロジェクト詳細ページはまだ作成中です')} />
        </article>
      </section>

      <section className={styles.contact}>
        <h2>お問い合わせ</h2>
        <Button label="メールで連絡する" onClick={() => window.location.href = 'mailto:your.email@example.com'} />
      </section>
    </main>
  );
}
