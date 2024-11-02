// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EmueraBA',
  tagline: '',
  favicon: 'img/emueraba_icon.ico',

  // Set the production url of your site here
  url: 'https://fegelein21.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/EmueraBA_Doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fegelein21', // Usually your GitHub org/user name.
  projectName: 'EmueraBA_Doc', // Usually your repo name.
  deploymentBranch: 'gh-pages', // 部署的分支，默认 gh-pages
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    // locales: ['zh', 'en'],
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        title: 'EmueraBA',
        logo: {
          alt: 'Logo',
          src: 'img/emueraba_icon.ico',
        },
		hideOnScroll: false,
        items: [
          // {
            // type: 'docSidebar',
            // sidebarId: 'tutorialSidebar',
            // position: 'left',
            // label: 'Docs',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {
            // href: '/',
            // label: 'GitHub',
            // position: 'right',
          // },
        ],
      },
      // footer: {
        // style: 'dark',
        // links: [
          // {
            // title: 'Docs',
            // items: [
              // {
                // label: 'Tutorial',
                // to: '/docs/emueraba',
              // },
            // ],
          // },
          // {
            // title: 'Community',
            // items: [
              // {
                // label: 'Stack Overflow',
                // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
            // ],
          // },
          // {
            // title: 'More',
            // items: [
              // {
                // label: 'GitHub',
                // href: 'https://github.com/facebook/docusaurus',
              // },
            // ],
          // },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
