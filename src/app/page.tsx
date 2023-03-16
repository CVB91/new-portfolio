'use client'

import {name, about} from '../app/lib/info'
import { BlogIcon, GitHubIcon } from '../app/components/icons'
import useDarkMode from './lib/useDarkMode'
import RainEffect from './components/rainEffect'


export default function Home() {

    const [colorTheme, setTheme] = useDarkMode()

  return (
    <section className='relative'>
      
      <h1 className='font-bold text-[#ecb365] text-3xl font-serif'>{name}</h1>
      <p className='my-5 max-w-[320px] text-justify text-neutral-200 dark:text-neutral-200 '>
        {about()}
      </p>
      <div className='flex items-center md:items-center my-6 flex-col md:flex-row'>
        <div className='mt-8 ml-0  space-y-6 text-neutral-200'>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/CVB91'
            className='flex items-center gap-2'
          >
            Lets connect on Github
            <GitHubIcon />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href=''
            className='flex items-center gap-2'
          >
            Have a peek at my blog
            <BlogIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
