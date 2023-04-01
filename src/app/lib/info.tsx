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
      <span>I am a full stack developer and I am a strong believer in the power of the web. I am passionate about building beautiful and accessible web experiences. Over the course of my developer journey, I have a built a strong foundation across multiple web technologies and frameworks.</span>
      <span>{" "}</span>
      <span>I am currently working freelance am always looking for new opportunities. If you have a project that you would like to discuss, please feel free to get in touch.</span> 
    </>
  )
};
