import type { Metadata } from 'next'
import { bio } from '../lib/info'

export default function AboutPage() {
  return (
    <section>
      <h1 className='font-bold text-[#ecb365]  text-3xl font-serif'>
        About Me
      </h1>
      <p className='my-5 text-neutral-200 dark:text-neutral-200 aboutP'>
        {bio()}
      </p>
      <div className='prose prose-neutral dark:prose-invert text-neutral-200 dark:text-neutral-200'>
        <p></p>
        <hr />

        <p className='mb-8'></p>
      </div>
    </section>
  )
}
