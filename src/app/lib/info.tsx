import me from './me.jpg'

export const name = 'Christian von Bredow';

export const avatar = me

export const about = () => {
  return (
    <>
      Hello. I am Christian. I am a{' '}
      <span className='text-[#ecb365]'>
        <b>web developer</b>
      </span>{' '} and I specialise in building beautiful web-based experiences.
    </>
  )
};
export const bio = () => {
  return (
    <>
      <span>
        I am a full stack developer based in Berlin and I combine my background
        in digital communications and political science to create diverse digtal
        experiences . As a self-taught programmer, my unyielding determination
        and ability to work independently showcase my passion for
        problem-solving. <br></br>
        <br></br> I enjoy working with a wide array of web technologies,
        consistently seeking opportunities to expand my ever-growing knowledge
        base. Infused with a thirst for learning, I truly embrace what it means
        to be a developer: a lifelong student of technolgy. What is not to like?{' '}
        <br></br>
        <br></br>
      </span>
      <span> </span>
      <span>
        I am currently working freelance and am always looking for new
        opportunities. If you have a project that you would like to discuss,
        please feel free to get in{' '}
        <a className='font-bold text-[#ecb365]' href='/contact'>
          touch.
        </a>
        
      </span>
    </>
  )
};
