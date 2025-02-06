import React from 'react'

const BackgroundGradient = ({ color1 , color2, className }) => {
  return (
    <div className={className}
       style={{
         width: "350px",
         height: "350px",
         borderRadius: "50%",
         background: `radial-gradient(circle, ${color1} 0%, ${color2} 70%)`,
         opacity: 0.2,
       }}></div>
  )
}

export default BackgroundGradient