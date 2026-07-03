import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SearchBar from '@theme/SearchBar';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
              <p>システムの全体像や、初期設定など最初に読んでいただくガイドです。</p>
            </Link>

            {/* 2. 機能 */}
            <Link to="/docs/features" className={styles.tileCard}>
              <div className={styles.tileIcon}>🛠️</div>
              <h3>機能</h3>
              <p>システムに搭載されている各機能の概要について解説します。</p>
            </Link>

            {/* 3. 自動化 */}
            <Link to="/docs/automation" className={styles.tileCard}>
              <div className={styles.tileIcon}>🤖</div>
              <h3>自動化</h3>
              <p>業務を効率化するための自動化機能の設定や活用方法です。</p>
            </Link>

            {/* 4. 運用 */}
            <Link to="/docs/operations" className={styles.tileCard}>
              <div className={styles.tileIcon}>📋</div>
              <h3>運用</h3>
              <p>日々の業務における具体的なオペレーションや運用フローです。</p>
            </Link>

            {/* 5. 設定 */}
            <Link to="/docs/settings" className={styles.tileCard}>
              <div className={styles.tileIcon}>🔧</div>
              <h3>設定</h3>
              <p>各種環境設定や、アカウント権限などの管理機能の設定方法です。</p>
            </Link>

            {/* 6. CSV標準フォーマット */}
            <Link to="/docs/csv-formats" className={styles.tileCard}>
              <div className={styles.tileIcon}>📄</div>
              <h3>CSV標準フォーマット</h3>
              <p>データのインポート・エクスポートに使うCSVの仕様書です。</p>
            </Link>

            {/* 7. エラー一覧 */}
            <Link to="/docs/errors" className={styles.tileCard}>
              <div className={styles.tileIcon}>⚠️</div>
              <h3>エラー一覧</h3>
              <p>トラブルが発生した際のエラーコードとその対処法をまとめています。</p>
            </Link>

            {/* 8. よくある質問 */}
            <Link to="/docs/faq" className={styles.tileCard}>
              <div className={styles.tileIcon}>💡</div>
              <h3>よくある質問</h3>
              <p>ユーザーから頻繁に寄せられる質問と回答（FAQ）です。</p>
            </Link>

            {/* 9. お問い合わせ対応ポリシー */}
            <Link to="/docs/support-policy" className={styles.tileCard}>
              <div className={styles.tileIcon}>🛡️</div>
              <h3>お問い合わせ対応ポリシー</h3>
              <p>サポートの受付時間や対応範囲、ガイドラインについての規定です。</p>
            </Link>

          </div>
        </div>
      </main>
    </Layout>
  );
}