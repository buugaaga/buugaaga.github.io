import React from 'react'
import { Grid, makeStyles, CardMedia, Typography,  } from '@material-ui/core'

import ildar from '../../images/Ildar.png'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  media: {
    maxHeight: 300,
    maxWidth: 300,
    borderRadius: '50%'
  },
  text: {
    padding: theme.spacing(1)
  }
  
}))

export const Second = ({ text }) => {
  const classes = useStyles()
  
  return (
    <Grid
      classes={{
        root: classes.root
      }}
      container
      justify='space-around'
      alignItems='center'
      spacing={3}
    >
      <Grid item sm={4} container alignItems='center' >
        <Typography
          variant='subtitle1'
          align='center'
        >
          <p>{text.homeSecondLeft}</p>
        </Typography>
      </Grid>
      <Grid item >
        <CardMedia
          component='img'
          className={classes.media}
          image={ildar}
          title='ildar'
        />
      </Grid>
      <Grid item sm={4} container alignItems='center'  >
        <Typography
         variant='subtitle1'
         align='center'
        >
          {text.homeSecondRight}
        </Typography>
      </Grid>
    </Grid>
  )
}
