// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Buku Angkatan',
  tagline: 'Badan Pengurus Harian',
  favicon: 'favicon.ico',
  staticDirectories: ['asset', 'src/static'],
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./src/configs/sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          path: 'bio',
          routeBasePath: '/bio',
          breadcrumbs: false,
          editUrl: 'https://github.com/dotdesign23/buku_angkatan/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Buku Angkatan',
        logo: {
          alt: 'Logo',
          src: 'logo.webp',
        },
        items: [
          {
            href: 'https://github.com/dotdesign23/buku_angkatan',
            label: 'GitHub',
            position: 'right',
          }
        ]
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
