'use client'

import Link from 'next/link'
import { projects } from '../constants/constants'
import { useState, useEffect } from 'react'

import React from 'react'
import Image from 'next/image'
import MobileDisplay from '../components/displayMobile'
import Display from '../components/display'

function Grid(props) {

  const [isHoverCapable, setIsHoverCapable] = useState(true)

  useEffect(() => {
    function checkHoverCapability() {
      if (window.matchMedia) {
        return window.matchMedia('(hover: hover)').matches
      } else {
        // matchMedia is not supported by the browser, assume hover is not supported
        return false
      }
    }

    setIsHoverCapable(checkHoverCapability())
  }, [])

  const { projects } = props
  console.log(projects[1].image)
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2  gap-10 place-content-center'>
      {projects.map((project) =>
        !isHoverCapable ? (
          <MobileDisplay
            key={project.title}
            text={project.title}
            imageUrl={project.image}
            description={project.description}
            tags={project.tags}
            source={project.source}
            code={project.code}
          />
        ) : (
          <Display
            key={project.title}
            text={project.title}
            imageUrl={project.image}
              description={project.description}
              tags={project.tags}
              source={project.source}
              code={project.code}
          />
        )
      )}
    </ul>
  )
}

export default function WorkPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl text-[#ecb365] font-serif mb-5'>
        Work
      </h1>

      <Grid projects={projects} />
    </section>
  )
}
