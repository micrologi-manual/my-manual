import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SearchBar from '@theme/SearchBar';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">どのような事でお困りですか？</p>
        <div className={styles.centerSearch}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="ホーム" description="自社システム操作マニュアル">
      <HomepageHeader />
      <main>
        <div className="container margin-top--md margin-bottom--xl">
          {/* 💡 3列×3行で綺麗に並ぶグリッド */}
          <div className={styles.tileGrid}>
            {/* 1. はじめての方へ */}
            <Link to="/docs/getting-started" className={styles.tileCard}>
              <div className={styles.tileIcon}>🔰</div>
              <h3>はじめての方へ</h3>
              <p>
                システムの全体像や、初期設定など最初に読んでいただくガイドです。
              </p>
            </Link>

            {/* 2. 入荷 */}
            <Link to="/docs/arrival" className={styles.tileCard}>
              <div className={styles.tileIcon}>📦</div>
              <h3>入荷</h3>
              <p>
                着荷登録から、入荷検品・棚入れ（入庫）までの操作手順を解説しています。
              </p>
            </Link>

            {/* 3. 出荷 */}
            <Link to="/docs/shipping" className={styles.tileCard}>
              <div className={styles.tileIcon}>🚚</div>
              <h3>出荷</h3>
              <p>
                引当のかけ方から、ピッキング・検品・発送処理までの流れを解説しています。
              </p>
            </Link>

            {/* 4. 在庫 */}
            <Link to="/docs/inventory" className={styles.tileCard}>
              <div className={styles.tileIcon}>🏬</div>
              <h3>在庫</h3>
              <p>
                在庫状況の確認、ロケーション移動や在庫調整の方法を掲載しています。
              </p>
            </Link>

            {/* 5. 設定 */}
            <Link to="/docs/settings" className={styles.tileCard}>
              <div className={styles.tileIcon}>🔧</div>
              <h3>設定</h3>
              <p>
                各種環境設定や、アカウント権限などの管理機能の設定方法です。
              </p>
            </Link>

            {/* 6. faq */}
            <Link to="/docs/faq" className={styles.tileCard}>
              <div className={styles.tileIcon}>💡</div>
              <h3>よくある質問</h3>
              <p>
                エラー発生時の対処法や、操作で困った際によく検索される解決策をまとめています。
              </p>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
