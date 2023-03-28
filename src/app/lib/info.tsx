import me from './me.jpg'

export const name = 'Christian von Bredow';

export const avatar = me

export const about = () => {
  return (
    <>
      Hello. I'm Christian. I'm a{' '}
      <span className='text-[#ecb365]'>
        <b>web developer</b>
      </span>{' '} and I specialise in building beautiful web-based experiences.
    </>
  )
};
export const bio = () => {
  return (
    <>
      I have a diverse background. I worked previously in digital communications
      and academia. Now I build things for the web. I have a built a strong foundation across multiple web technologies and frameworks. I am a full stack developer with a focus on the front end. I am a strong believer in the power of the web and I am passionate about building beautiful and accessible web experiences.
    </>
  )
};
