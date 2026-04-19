export default defineAppConfig({
  docus: {
    title: 'Gangsta Agents',
    description: 'AI development structured like a mafia family — hierarchy, strict pipelines, and discipline enforced. The Don approves every phase. No code ships without a contract.',
    url: 'https://gangsta.page',
    image: '/web-app-manifest-512x512.png',
    github: {
      owner: 'kucherenko',
      repo: 'gangsta',
      url: 'https://github.com/kucherenko/gangsta',
      branch: 'main',
      root: 'skills',
      edit: true,
      contributors: false,
    },
    aside: {
      level: 1,
      collapsed: false,
    },
    colorMode: 'system',

    footer: {
      credits: {
        icon: 'i-lucide-shield',
        text: 'Omerta. Or else.',
        href: '/',
      },
    },
    socials: {
      github: 'kucherenko/gangsta',
    },
    toc: {
      title: 'On this page',
      bottom: {
        title: 'Community',
        links: [
          {
            icon: 'i-simple-icons-github',
            label: 'Star on GitHub',
            to: 'https://github.com/kucherenko/gangsta',
          },
        ],
      },
    },
  },
  github: {
    url: 'https://github.com/kucherenko/gangsta',
  },
  header: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Gangsta Agents',
    },
    title: 'GANGSTA AGENTS',
  },
  ui: {
    colors: {
      primary: 'amber',
      secondary: 'amber',
      neutral: 'zinc',
    },
  },
})