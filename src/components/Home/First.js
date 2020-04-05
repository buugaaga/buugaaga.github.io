/** @jsx jsx */

import { Grid } from '@material-ui/core'
import { jsx, css } from '@emotion/core'
import { useProgressiveImage } from '../../hooks/useProgressiveImage'

import natureBg from '../../images/nature.png'
import natureMinBg from '../../images/natureMin.png'

export const First = () => {

  const [ src, placeholder ] = useProgressiveImage(natureBg, natureMinBg)

  return (
    <Grid
      container
      css={ css`
        height: 100vh;
        background-color: grey;
        background-image: url(${src || placeholder});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      
    </Grid>
  )
}
