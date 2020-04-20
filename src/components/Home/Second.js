import React from 'react'
import { Grid, makeStyles, CardMedia, Typography, Button,  } from '@material-ui/core'

import ildar from '../../images/ildar.png'
import resume from '../../docs/resume-ruMD.pdf'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  media: {
    maxHeight: 300,
    maxWidth: 200,
    borderRadius: '50%'
  },
  text: {
    padding: theme.spacing(2)
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
      
    >
      <Grid item sm={4} container alignItems='center' className={classes.text}>
        <Typography
          variant='subtitle1'
          align='center'
        >
          {text.secondLeft}
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
      <Grid item sm={4} container alignItems='center' justify='center' >
        <Typography
         variant='subtitle1'
         align='center'
        >
          {text.secondRight}
        </Typography>
      </Grid>
      <Grid item xs={12} > 
    <Button href={resume} fullWidth download color='primary' variant='contained' >{text.secondResume}</Button>
      </Grid>
    </Grid>
  )
}
