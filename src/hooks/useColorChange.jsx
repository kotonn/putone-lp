import { useState, useEffect } from 'react'
import { useScrollPosition } from './useScrollPosition'

export function useColorChange() {
  const [scrollY, setScrollY] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0, 0.3)')

  useScrollPosition(({ currPos }) => {
    setScrollY(-currPos.y)
  }, [])

  useEffect(() => {
    const opacity = 0.3 + (scrollY / 1000) * 0.4
    setBackgroundColor(`rgba(0, 0, 0, ${Math.min(opacity, 0.8)})`)
  }, [scrollY])

  return backgroundColor
}
