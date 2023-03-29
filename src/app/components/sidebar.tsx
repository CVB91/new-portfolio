'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const navItems = {
  '/': {
    name: 'home',
    isActive: false,
  },
  '/about': {
    name: 'about',
    isActive: false,
  },
  '/work': {
    name: 'work',
    isActive: false,
  },
  '/contact': {
    name: 'contact',
    isActive: false,
  },
}

export default function Navbar() {
  let pathname = usePathname() || '/'
 

  // Set the active item in the navItems object based on the current pathname

    navItems[pathname].isActive = true


  return (
    <aside className='md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='flex overflow-hidden flex-row md:flex-col mt-2 items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
          id='nav'
        >
          <div className='flex flex-row md:flex-col  space-x-0 pr-10 mb-2 mt-2 md:mt-0'>
            {Object.entries(navItems).map(([path, { name, isActive }]) => (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all hover:text-[#ecb365] dark:hover:text-neutral-200 py-[5px] px-[10px]',
                  {
                    'text-white': !isActive,
                    'font-bold': isActive,
                    'text-[#ecb365]': !isActive,
                  }
                )}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
