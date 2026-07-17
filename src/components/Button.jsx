import React from 'react'

function Button(prop) {
  return (
    <button type= {prop.type || "button"}
      style={{backgroundColor: prop.color }}
      onClick={prop.onClick}
      // disabled={prop.disbled}
    >
      {prop.title}
    </button>
  )
}

export default Button