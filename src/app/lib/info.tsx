import me from './me.jpg'

export const name = 'Christian von Bredow'

export const avatar = me

export const about = () => {
  return (
    <>
      Hello. I am Christian. I am a{' '}
      <span className='text-[#ecb365]'>
        <b>web developer</b>
      </span>{' '}
      and I specialise in building beautiful web-based experiences.
    </>
  )
}
export const bio = () => {
  return (
    <>
      <span>
        I am an experienced full stack developer and I work with a wide variety
        of web technologies. This portfolio is a combination of some professional work and some work I have built for fun. I am always seeking to expand my repotoire and stay abreast
        of the cutting edge advancements the web has to offer. It is such and
        exciting time to be working in this field and the best is yet to come!
        <br></br>
        <br></br> I enjoy working with a wide array of web technologies,
        consistently seeking opportunities to expand my ever-growing knowledge
        base. Infused with a thirst for learning, I truly embrace what it means
        to be a developer: a lifelong student of technolgy. What is not to like?{' '}
        <br></br>
        <br></br>
      </span>
      <span> </span>
      <span>
        I am currently working for Nutri-Tech Solutions, an agri-tech company
        based in Australia. I am always looking for new ways of collaborating.
        If you have a project that you would like to discuss, please feel free
        to get in{' '}
        <a className='font-bold text-[#ecb365]' href='/contact'>
          touch.
        </a>
      </span>
    </>
  )
}
