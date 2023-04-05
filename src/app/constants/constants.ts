interface Project {
  title: string
  description: string
  image: string
  tags: string
  source: string
  code: string
  id: number
}

export const projects: Project[] = [
  {
    title: 'Winter Hammock Company',
    description:
      'Full Stack MERN Application E-commerce application for the Winter Hammock Company.',
    image: '/winterhammock.png',
    tags: `MongoDB, Express, React and Node`,
    source: 'https://winterhammockcompany.herokuapp.com',
    code: 'https://github.com/CVB91/winter-hammock-company',
    id: 0,
  },
  {
    title: 'Flight Carbon API',
    description:
      'Flight Carbon API is a REST API that calculates the carbon footprint of a flight. Free to use forever.',
    image: '/flightcarbon.png',
    tags: `NextJS, Prisma, Typescript, Tailwind CSS, Upstash, Redis`,
    source: 'https://flight-carbon-api.vercel.app',
    code: 'https://github.com/CVB91/Flight-Carbon-API',
    id: 2,
  },

  {
    title: 'Airprint',
    description:
      'Airprint is a web app that calculates your flight carbon data. The app calls the Flight Carbon API to retrieve flight data and calculates the carbon footprint of each flight.',
    image: '/airprint1.png',
    tags: `Vanilla JS, HTML, Tailwind CSS`,
    source: 'https://airprint.vercel.app/',
    code: 'https://github.com/CVB91/Airprint',
    id: 3,
  },
  {
    title: 'Prisma',
    description:
      'Creative porfolio site for Prisma Studios, a collective of creative photographers from around the world. No framework.',
    image: '/prisma.png',
    tags: `Vanilla JS, GSAP, HTML, CSS`,
    source: 'https://prisma-ten-ruby.vercel.app/',
    code: 'https://github.com/CVB91/prisma',
    id: 4,
  },
  {
    title: 'MindMap',
    description:
      'MindMap is my personal blog where I write about the trials and tribulations of being a self-taught web developer. There are some useful how-tos thrown in for good measure.',
    image: '/mindmap.png',
    tags: `React, Next.js, CSS Modules, Mongo DB`,
    source: 'https://mind-map-nu.vercel.app/',
    code: 'https://github.com/CVB91/MindMap',
    id: 5,
  },
  {
    title: 'Password Generator',
    description:
      'A password generator is a tool that automatically creates strong, randomized passwords for users. Built from Figma files from Frontend Mentor.',
    image: '/passwordgen.png',
    tags: `Vanilla JS, HTML, Tailwind CSS`,
    source: 'https://password-gen-sooty.vercel.app/',
    code: 'https://github.com/CVB91/password-gen',
    id: 6,
  },
]
