

// import { jsx, css } from '@emotion/core'
import React from 'react'
import Container from '@material-ui/core/Container'

import { First } from './First'

export const MainHome = ({ru}) => {
  return (
    <Container 
      maxWidth={false}
      disableGutters
    >
      <First ru={ru} />
    </Container>
  )
}
