import React from 'react'
import { useColorChange } from '../hooks/useColorChange'

const Sidebar = React.forwardRef(() => {
  const color = useColorChange()
  return (
    <>
      <div className="vertical-text-container" style={{ color: color }}>
        <span className="vertical-text">服を着るように、音楽を着る。</span>
        <br />
        <span className="vertical-text-title">PuTone</span>
      </div>
    </>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
