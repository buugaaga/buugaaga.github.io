import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import drumMashine from '../../images/drum-mashine.png'
import { Grid, Box, Collapse, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '70px',
  },
  muyCard: {
    maxWidth: '1200px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '600px',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '500px',
    },
  },
  cardContent: {
    height: 'auto'
  }
}))

export const MainWorks = ({ text }) => {

  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  if(matches) {
    return (
      <Grid classes={{ root: classes.root }} justify='center' container>
        <Grid item container justify='center'>
          <Box mb={10}>
            <Typography variant='h3'>{text.title}</Typography>
          </Box>
        </Grid>
        <Grid item container justify='center'>
          <Card className={classes.muyCard}>
            <CardMedia
              component='img'
              alt='fcc-project'
              height='140'
              image={drumMashine}
              title='drum-mashine'
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant='h5' component='h2'>
                {text.cards[0].name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {text.cards[0].startDescription}
                <Button
                  onClick={handleExpandClick}
                  component='span'
                  disableElevation
                  disableRipple>
                  {text.cards[0].toContinue}
                </Button>
              </Typography>
              <Collapse in={expanded} unmountOnExit>
                <Typography variant='body1'>
               {text.cards[0].endDescription}
                </Typography>
                
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  } else {
    return ( 
      <Grid classes={{ root: classes.root }} justify='center' container>
        <Grid item container justify='center'>
          <Box mb={10}>
            <Typography variant='h3'>{text.title}</Typography>
          </Box>
        </Grid>
        <Grid item container justify='flex-start'>
          <Grid item md={5} >
            <Box mx={7}>
            <CardMedia
              component='img'
              alt='fcc-project'
              height='140'
              image={drumMashine}
              title='drum-mashine'
            />
            </Box>
            
            </Grid>
            <Grid item container md={6}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {text.cards[0].name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
               {text.cards[0].startDescription}
                <Button
                  onClick={handleExpandClick}
                  component='span'
                  disableElevation
                  disableRipple>
                  читать дальше
                </Button>
              </Typography>
              <Collapse in={expanded} unmountOnExit>
                {text.cards[0].endDescription}
              </Collapse>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    )
  }
 
}
