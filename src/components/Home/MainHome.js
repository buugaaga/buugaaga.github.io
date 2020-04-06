

// import { jsx, css } from '@emotion/core'
import React from 'react'
import Container from '@material-ui/core/Container'

import { First } from './First'
import { Second } from './Second' 
import { Education } from './Education'

export const MainHome = ({ru, text}) => {
  
  return (
    <Container 
      maxWidth={false}
      disableGutters
    >
      <First ru={ru} />
      <Second  text={text} />
      <Education text={text} />
    </Container>
  )
}
