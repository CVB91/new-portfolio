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
      and academia. Now I.
    </>
  )
};
