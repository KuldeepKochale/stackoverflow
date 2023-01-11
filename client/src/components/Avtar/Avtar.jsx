import React from 'react'

const Avatar = ({children, backgroundColor, px, py, color, borderRadius, fontSize, cursor,textDecoration}) => {
  const style = {
    backgroundColor,
    padding: `${px} ${py}`,
    color: color || 'black', // black here is acting as default value
    borderRadius,
    fontSize,
    textAlign: 'center',
    cursor: cursor || null,
    textDecoration:'none '
  }
  
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar