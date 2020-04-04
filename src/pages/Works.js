import React, { useState } from 'react'

export const Works = () => {

  const [data, setData] = useState([
    'hi',
    'by',
    'guy'
  ])
    return (
      <div>
        { data.map( (item, i) => (
          <div key={i}>
            {item}
          </div>
        )) }
      </div>  
    )
}

