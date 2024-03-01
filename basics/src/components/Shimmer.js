import React from 'react'

function Shimmer() {
  return (
    <div className='restaurant-list'>
      {Array(20).fill("").map((e,index)=><div className='shimmer-card' key={index}></div>)}
    </div>
  )
}

export default Shimmer