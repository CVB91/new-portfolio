import React, { useEffect, useRef, useState } from 'react'

interface ElementItem {
  id: number
  type: string
  x: number
  y: number
}

const CatchTheElementsGame: React.FC = () => {
  const [elements, setElements] = useState<ElementItem[]>([])
  const [collectorPosition, setCollectorPosition] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const collectorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (collectorRef.current) {
        setCollectorPosition(e.clientX - collectorRef.current.clientWidth / 2)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const newItem: ElementItem = {
        id: Date.now(),
        type: '<div>',
        x: Math.random() * (window.innerWidth - 50),
        y: 0,
      }
      setElements((prevElements) => [...prevElements, newItem])
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const moveItemsDown = () => {
      setElements((prevElements) =>
        prevElements.map((element) => ({
          ...element,
          y: element.y + 10,
        }))
      )
    }

    const interval = setInterval(moveItemsDown, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const checkCollision = (element: ElementItem) => {
    if (collectorRef.current) {
      const collectorBounds = collectorRef.current.getBoundingClientRect()
      const elementBounds = {
        top: element.y,
        bottom: element.y + 50,
        left: element.x,
        right: element.x + 50,
      }

      if (
        elementBounds.left < collectorBounds.right &&
        elementBounds.right > collectorBounds.left &&
        elementBounds.top < collectorBounds.bottom &&
        elementBounds.bottom > collectorBounds.top
      ) {
        // Collision detected, remove the element and increase score
        setElements((prevElements) =>
          prevElements.filter((item) => item.id !== element.id)
        )
        setScore((prevScore) => prevScore + 1)
      }
    }
  }

  return (
    <div className='relative w-1/2 h-1/2 border'>
      {elements.map((element) => (
        <div
          key={element.id}
          className='absolute w-12 h-12 bg-blue-500 element'
          style={{ left: element.x, top: element.y }}
          onAnimationEnd={() => checkCollision(element)}
        >
          {element.type}
        </div>
      ))}
      <div
        ref={collectorRef}
        className='absolute bottom-0 w-32 h-12 bg-green-500'
        style={{ left: collectorPosition }}
      />
      <div className='absolute top-0 right-0 p-4 text-xl font-bold'>
        Score: {score}
      </div>
    </div>
  )
}

export default CatchTheElementsGame
