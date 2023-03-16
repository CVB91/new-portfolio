import React, { useEffect, useState } from 'react'


interface FallingElementProps {
  id: number
  onAnimationEnd: () => void
}

const FallingElement: React.FC<FallingElementProps> = ({
  id,
  onAnimationEnd,
}) => {
  return (
    <div
      id={`falling-element-${id}`}
      className='falling-element'
      onAnimationEnd={onAnimationEnd}
    ></div>
  )
}

const RainEffect: React.FC = () => {
  const [fallingElements, setFallingElements] = useState<FallingElementProps[]>(
    []
  )
  const elementsCount = 50

  useEffect(() => {
    const interval = setInterval(() => {
      if (fallingElements.length < elementsCount) {
        const id = new Date().getTime()
        const onAnimationEnd = () => {
          setFallingElements((elements) =>
            elements.filter((element) => element.id !== id)
          )
        }
        const newElement: FallingElementProps = { id, onAnimationEnd }
        setFallingElements((elements) => [...elements, newElement])
      }
    }, 100)

    return () => clearInterval(interval)
  }, [fallingElements])

  return (
    <div className='rain-effect-container'>
      {fallingElements.map((element) => (
        <FallingElement key={element.id} {...element} />
      ))}
    </div>
  )
}

export default RainEffect
