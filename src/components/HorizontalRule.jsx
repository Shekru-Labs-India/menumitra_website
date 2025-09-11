import React from 'react'

function HorizontalRule({className = 5}) {
  return (
    <div className={`my-${className}`}>
    <hr />
    </div>
  )
}

export default HorizontalRule