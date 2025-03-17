export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/x/15min',
    available: true,
  },
  profile: {
    name: 'Dany Chaker',
    job: 'Student at High School of Technology in Brno',
    email: 'dany@chaker.cz',
    phone: '+420 608 925 906',
    picture: 'https://avatars.githubusercontent.com/u/77692779?v=4',
  },
  socials: {
    github: 'https://github.com/SDragonex',
    twitter: 'https://twitter.com/SDragonex',
    linkedin: 'https://www.linkedin.com/in/',
    instagram: 'https://www.instagram.com/chaker.dany',
    spotify: 'https://open.spotify.com/user/vaxztugt5y6mt1y3a09h1svoj',
  },
  seo: {
    title: 'Portfolio',
    description: 'This site was built with Nuxt and Tailwind CSS',
    url: 'https://sdragonex.nuxt.space',
    lang: 'en',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})