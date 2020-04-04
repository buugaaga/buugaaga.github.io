/** @jsx jsx   */

import React from 'react'
import { jsx, css } from '@emotion/core'
import Container from '@material-ui/core/Container'

export const MainHome = () => {
  return (
    <Container 
      maxWidth={false}
      css={css`
        background-color: red;
      `} 
    >
      hi
    </Container>
  )
}
