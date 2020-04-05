import React  from 'react'

export const Works = ({ ru }) => {
  const data = []
  if(!ru) {
    data.push('hi')
  }
  
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

