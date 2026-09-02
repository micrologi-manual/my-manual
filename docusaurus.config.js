// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WMS Quick Start Guide変更テスト', // 💡 サイトのメインタイトル
  tagline: 'システムの操作方法を解説するポータルサイトです',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 💡 後ほどGitHub Pagesに公開する際、ここを自社のURLに書き換える
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // 💡 後ほどGitHubの設定に合わせて書き換えます
  organizationName: 'your-github-org',
  projectName: 'your-repo-name',

  onBrokenLinks: 'throw',

  // 🛠️ 【変更点1】サイトの基本言語を「日本語」に設定
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        // 💡 マニュアルサイトでは基本的にブログは使わないため、設定を無効化（削除）
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 🛠️ 【変更点2】ここに日本語対応の「ローカル検索プラグイン」を合体！
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        language: ['en', 'ja'], // 👈 英語と日本語の両方で検索できるように設定
        indexPages: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true, // ユーザーのPC設定（ダークモード等）に合わせる
      },

      // 🛠️ 【変更点3】上のナビゲーションバーをマニュアル用にシンプル化
      navbar: {
        title: 'microLogi Users Guide', // ナビバーの左上の文字
        /*
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },*/
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'マニュアルを開く', // 「Tutorial」から日本語に変更
          },
          // 💡 不要な「Blog」や「GitHub」へのリンクを削除してスッキリさせました
        ],
      },

      // 🛠️ 【変更点4】フッター（画面最下部）のリンクも日本語に整理
      footer: {
        style: 'dark',
        links: [
          {
            title: 'コンテンツ',
            items: [
              {
                label: 'マニュアルのトップへ',
                to: '/docs/getting-started', // 先ほど引っ越した概要ページへ飛ぶように設定
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} microLogiマニュアル. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
