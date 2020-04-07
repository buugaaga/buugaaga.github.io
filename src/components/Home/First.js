/** @jsx jsx */

import { Grid, Typography } from '@material-ui/core'
import { jsx, css } from '@emotion/core'
import { useProgressiveImage } from '../../hooks/useProgressiveImage'

import natureBg from '../../images/nature.png'
import natureMinBg from '../../images/natureMin.png'

import enText from '../../translations/translations.json'
import ruText from '../../translations/translations-ru.json'

export const First = ({text}) => {

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
      justify='center'
      alignItems='center'
    >
      <Typography
        variant='h4'
      >
        { text.name }
      </Typography>
      
    </Grid>
  )
}
