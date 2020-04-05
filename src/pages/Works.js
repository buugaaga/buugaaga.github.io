import React  from 'react'

export const Works = () => {

  const data = ['hi', 'by', 'guy']
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

