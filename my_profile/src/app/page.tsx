
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../components/component';
import styles from '../styles/globals.module.css';


export default function HomePage() {
  const router = useRouter();
  return (
    <div className={styles.content}>
   <div className={styles.body}>
     <main className={styles.container}>
      <header className={styles.header}>
        <h1>廣瀨遥介の自己紹介サイト</h1>
        <p>My profile site</p>
      </header>

      <section className={styles.skills}>
        <h2>～簡単な自己紹介～</h2>
        <section className={styles.profile}>
      <img src="/profile.jpg" alt="プロフィール写真" className={styles.avatar}  />
      <p>大石泉　[コスモブルーの未来]</p>
      </section>
        <ul>
          <li>出身地： 新潟県新潟市</li>
          <li>満年齢： 21歳</li>
          <li>在籍校： 東洋大学情報連携学部情報連携学科（INIAD）</li>
          <li>担当アイドル： 大石泉、砂塚あきら、風野灯織、月村手毬</li>

        </ul>
      </section>

  <section className={styles.skills}>
        <h2>～趣味～</h2>
         <section className={styles.profile}>
      <img src="/vc.png" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      <p>ゲームセンターテクノポリス　バーチャロン・オラトリオタングラム</p>
      </section>
        <section className={styles.profile}>
      <img src="/af.png" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      <p>ゲームセンターテクノポリス　アフターバーナー・クライマックスとアウトラン</p>
      </section>
        <ul>
          <li>ゲーム機<br></br><br></br><a>　 昨年1998年にセガから発売されたDreamcastを実家の近くにあるハードオフで買いました。<br></br><br></br>　 バーチャロンが特にハマっています。Switch2も応募しました。</a></li>
          <br></br>
          <li>アニメ<br></br><br></br><a>　 あにめふぉりおというアプリで面白そうなアニメを探しながら様々なジャンルのアニメを観ています。<br></br><br></br>　 現在は「日々は過ぎれど飯うまし」というアニメを観ています。オススメのアニメがあったら教えてもらいたいです！</a></li>
          <br></br>
          <li>アーケードゲーム<br></br><br></br><a>　 大学の影響で東京が近くなって以降ゲームセンターに行くようになりました。<br></br><br></br>　 新潟県にもゲームセンターがあることを知り、新潟県長岡市の宮内駅の近くにあるゲームセンターテクノポリスというゲームセンターに行きました。<br></br><br></br>　 行ったことがあるゲームセンター　<br></br>　 ゲーセン帝(池袋店・高田馬場店)　テクノポリス　HEY　GIGO　namco　タイトーステーション</a></li>
          <br></br>
          <li>動画作成<br></br><br></br><a>　 大学の課題で動画作成をしてからハマりました<br></br><br></br>　 ゆっくりムービーメーカー中心で作成しています。</a></li>
          <br></br>
          <li>野球観戦<br></br><br></br><a>　 山賊打線に魅力を感じて高校1年生から埼玉西武ライオンズのファンになりました。<br></br><br></br>　 毎試合ハイライトを観ていて球場が近くなってからは何度か観戦にも行きました。</a></li>
          <br></br>
          <li>ラーメン巡り<br></br><br></br>　 池袋・赤羽・新潟のラーメンを主に巡っています。おすすめのラーメン屋があったらぜひ教えて貰いたいです。</li>
          <br></br>
          <li>旅行<br></br><br></br>　 最近は佐渡島が世界遺産になったということで友達と一緒に佐渡旅行に行きました。<br></br>　 家族とは福島旅行によく行きます。現在は島根、札幌の旅行を考えています。</li>
        </ul>
      </section>

        <section className={styles.skills}>
        <h2>～資格・特技～</h2>
          <section className={styles.profile}>
      <img src="/mariokart.png" alt="プロフィール写真" width="500" height="300" className={styles.avatar}  />
      <p>マリオカート8DXのインターネットでの戦績</p>
      </section>
        <ul>
          <li>普通自動車免許（MT）</li>
          <li>基本情報技術者（勉強中）</li>
          <li>FP（勉強中）</li>
          <li>マリオカート</li>
          <li>バドミントン(サーブだけ)</li>
        </ul>
        <Button label="詳細を見る" onClick={() => alert('現在製作中です')} />
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
          <Button label="詳細を見る" onClick={() => alert('現在製作中です')} />
        </article>

        <article className={styles.projectCard}>
          <h3>趣味やアルバイトでの経験</h3>
          <p>アルバイトや趣味で得たものです</p>
          <Button label="詳細を見る" onClick={() => alert('現在製作中です')} />
        </article>
      </section>
    </main>
    </div>
    </div>
  );
}

