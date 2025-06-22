
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../components/component';
import styles from '../styles/globals.module.css';

export default function HomePage() {
  const router = useRouter();
  return (
   
     <main className={styles.container}>
      <header className={styles.header}>
        <h1>自己紹介サイト</h1>
        <p>My profile site</p>
      </header>

      <section className={styles.skills}>
        <h2>～簡単な自己紹介～</h2>
        <section className={styles.profile}>
      <img src="/profile.jpg" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <ul>
          <li>出身地： 新潟県新潟市</li>
          <li>満年齢： 20歳</li>
          <li>在籍校： 東洋大学情報連携学部情報連携学科（INIAD）</li>
          <li>担当アイドル： 大石泉、砂塚あきら、風野灯織、月村手毬</li>

        </ul>
      </section>

  <section className={styles.skills}>
        <h2>～趣味～</h2>
         <section className={styles.profile}>
      <img src="/vc.png" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <section className={styles.profile}>
      <img src="/af.png" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <ul>
          <li>ゲーム機</li>
          <li>アニメ</li>
          <li>アーケードゲーム</li>
          <li>動画作成</li>
          <li>野球観戦</li>
          <li>ラーメン巡り</li>
          <li>旅行</li>
        </ul>
      </section>

        <section className={styles.skills}>
        <h2>～資格・特技～</h2>
          <section className={styles.profile}>
      <img src="/mariokart.png" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      </section>
        <ul>
          <li>普通自動車免許（MT）</li>
          <li>基本情報技術者（勉強中）</li>
          <li>FP（勉強中）</li>
          <li>マリオカート</li>
        </ul>
      </section>


      <section className={styles.projects}>
        <h2>経験</h2>

        <article className={styles.projectCard}>
          <h3>大学での学び</h3>
        <ul>
          <li>コンピュータ・サイエンス</li>
          <li>ユーザー・エクスペリエンス</li>
          <li>ビジネス構築</li>
          <li>データ・サイエンス</li>
          <li>経済学</li>
          <li>チーム開発・チーム実習</li>
        </ul>
            <Button label="詳細を見る" onClick={() => router.push('/campus')} />
        </article>

        <article className={styles.projectCard}>
          <h3>個人的な学習</h3>
        <ul>
          <li>プログラミング学習</li>
          <li>動画制作</li>
          <li>資格の学習</li>
        </ul>
          <Button label="詳細を見る" onClick={() => router.push('/my_learning')} />
        </article>

        <article className={styles.projectCard}>
          <h3>趣味やアルバイトでの経験</h3>
          <p>アルバイトや趣味で得たものです</p>
          <Button label="詳細を見る" onClick={() => router.push('/expensive')} />
        </article>
      </section>

      <section className={styles.contact}>
        <h2>お問い合わせ</h2>
        <Button label="メールで連絡する" onClick={() => window.location.href = 'hiroseyousuke84@gmail.com'} />
      </section>
    </main>
  );
}

