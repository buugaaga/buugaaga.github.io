import React from 'react'
import { Grid, Typography, List, ListItem, makeStyles } from '@material-ui/core'

const useStyle = makeStyles( theme => ({
  root: {
    height: '100vh'
  }
}))


export const Education = ({ text }) => {

  const classes = useStyle()

  return (
    <Grid container className={classes.root} >
      <Grid item container alignItems='center' justify='center'>
        <Typography variant='h3' align='center'>
          {text.educationTitle}
        </Typography>
      </Grid>
      <Grid item >
        <List>
          <ListItem>
            <h3>{text.educationDiplomaTitle}</h3>
            <br />
            <p>{text.educationDiplomaDescription}</p>
          </ListItem>
          <ListItem>
            <h5>{text.educationFCCTitle}</h5>
            <br />
            <p>{text.educationFCCDescription}</p>
          </ListItem>
          <ListItem>
            <h5>{text.educationSololearnTitle}</h5>
            <br />
            <p>{text.educationSololearnDescription}</p>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}
