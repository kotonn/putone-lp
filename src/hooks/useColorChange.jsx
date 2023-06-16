import { useState, useEffect } from 'react'
import { useScrollPosition } from './useScrollPosition'

export function useColorChange() {
  const [scrollY, setScrollY] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('')

  useScrollPosition(({ currPos }) => {
    setScrollY(-currPos.y)
  }, [])

  useEffect(() => {
    if (scrollY > 1000) {
      setBackgroundColor('#FFFFFF')
    } else {
      const rgbValue = Math.floor((scrollY / 1000) * 255)
      setBackgroundColor(`rgba(${rgbValue}, ${rgbValue}, ${rgbValue})`)
    }
  }, [scrollY])

  return backgroundColor
}
