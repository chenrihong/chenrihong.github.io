import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'HRP3.0',
  tagline: '欢迎参与维护',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chenrihong.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chenrihong', // Usually your GitHub org/user name.
  projectName: 'chenrihong.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/chenrihong/chenrihong.github.io/tree/main/'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/chenrihong/chenrihong.github.io/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo-of-thothtop.png',
    navbar: {
      title: '',
      logo: {
        alt: 'THOTHINFO',
        src: 'img/logo-of-thothtop.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: '低代码使用文档',
        },
        {
          to: '/func/intro',
          label: '函数文档',
          position: 'left',
          activeBaseRegex: `/func/`,
        },
        {
          to: '/flow/intro',
          label: '需求(流程)文档',
          position: 'left',
          activeBaseRegex: `/flow/`,
        },
        {
          to: '/lowcode-design/intro',
          label: '低代码设计',
          position: 'left',
          activeBaseRegex: `/lowcode-design/`,
        },
        {
          to: '/docs-frontend/intro',
          label: '前端文档',
          position: 'left',
          activeBaseRegex: `/docs-frontend/`,
        },
        // {
        //   type: 'dropdown',
        //   label: '业务文档',
        //   position: 'left',
        //   items: [
        //     {
        //       label: '流程',
        //       to: '/docs/flow/intro',
        //     },
        //   ],
        // },
        { to: '/blog', label: '文章', position: 'left' },
        {
          href: 'https://github.com/chenrihong/chenrihong.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'HRP3.0',
              to: '/docs/intro',
            }
          ],
        },
        {
          title: '交流',
          items: [
            {
              label: '留言',
              href: 'https://github.com/chenrihong/chenrihong.github.io/issues',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              label: '博文',
              to: '/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'R2IYF7ETH7',

      // Public API key: it is safe to commit it
      apiKey: '599cec31baffa4868cae4e79f180729b',

      indexName: 'docsearch',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      'content-docs',
      {
        id: 'func',
        path: 'func',
        routeBasePath: 'func',
        editUrl: 'https://github.com/chenrihong/chenrihong.github.io/tree/main/',
        editCurrentVersion: false,
        sidebarPath: './sidebarsCommunity.ts',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'flow',
        path: 'flow',
        routeBasePath: 'flow',
        editUrl: 'https://github.com/chenrihong/chenrihong.github.io/tree/main/',
        editCurrentVersion: false,
        sidebarPath: './sidebarsCommunity.ts',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'lowcodeDesign',
        path: 'lowcode-design',
        routeBasePath: 'lowcode-design',
        editUrl: 'https://github.com/chenrihong/chenrihong.github.io/tree/main/',
        editCurrentVersion: false,
        sidebarPath: './sidebarsLowcodeDesign.ts',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'docsFrontend',
        path: 'docs-frontend',
        routeBasePath: 'docs-frontend',
        editUrl: 'https://github.com/chenrihong/chenrihong.github.io/tree/main/',
        editCurrentVersion: false,
        sidebarPath: './sidebarsLowcodeDesign.ts',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      } satisfies DocsOptions,
    ],
  ]
};

export default config;
