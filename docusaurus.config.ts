import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Creao",
  tagline: "Revolutionizing Agentic Workflow Development",
  favicon: "img/creao_black_logo.svg",

  // Update the URL to your GitHub Pages URL
  url: "https://creaoai.github.io",
  // Set baseUrl to match GitHub Pages repository path
  baseUrl: "/docs/",

  // GitHub Pages deployment config
  organizationName: "creaoai", // Usually your GitHub org/user name
  projectName: "docs", // Usually your repo name

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "tutorials",
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "blogs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/creao_black_logo.svg",
    navbar: {
      // title: "Creao",
      logo: {
        alt: "Creao Logo",
        src: "img/creao_black_logo.svg",
        width: 65,
        href: "https://www.creao.ai/login",
        target: "_blank",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
          to: "/tutorials",
        },
        {
          to: "/blogs",
          label: "Blog",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Tutorials",
          items: [
            {
              label: "Tutorial",
              to: "/tutorials",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/qWm34FdnRX",
            },
            {
              label: "X",
              href: "https://x.com/CreaoAI",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/company/creaoai",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Creao AI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
