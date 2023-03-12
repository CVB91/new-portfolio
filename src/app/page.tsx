import Link from 'next/link'
import Image from 'next/image'
import {name, about, bio,avatar} from '../app/lib/info'
import { EmailIcon, GitHubIcon, ViewsIcon } from '../app/components/icons'


export default function Home() {
  return (
    <section>
      <h1 className='font-bold text-3xl font-serif'>{name}</h1>
      <p className='my-5 max-w-[450px] text-neutral-800 dark:text-neutral-200'>
        {about()}
      </p>
      <div className='flex items-start md:items-center my-8 flex-col md:flex-row'>
        <Image
          alt={name}
          className='rounded-full grayscale'
          src={avatar}
          placeholder='blur'
          width={100}
          priority
        />
        <div className='mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400'>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/CVB91'
            className='flex items-center gap-2'
          >
            <GitHubIcon />
            My Github
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='mailto:cphvb91@gmail.com'
            className='flex items-center gap-2'
          >
            <EmailIcon/>
            Email Me!
          </a>
        </div>
      </div>
      <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
        {bio()}
      </p>
    </section>
  )
}
