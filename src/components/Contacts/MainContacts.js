import React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'
import {
  ListItem,
  List,
  ListSubheader,
  Typography,
  Link,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
}))

export const MainContacts = ({ text }) => {
  const classes = useStyles()

  return (
    <Box mt={10} mx={5}>
      <List>
        <ListSubheader>
          <Typography variant='h3'>{text.title}</Typography>
        </ListSubheader>
        <ListItem>
          {text.email}
          <Link href='mailto:ildar.nasrov@gmail.com'>
            &nbsp;ildar.nasrov@gmail.com
          </Link>
        </ListItem>
        <ListItem>
          {text.tel}
          <Link href='tel:+79923437503'>&nbsp;+79923437503</Link>
        </ListItem>
        <ListItem>
          {text.social}
          <Link
            href='https://www.linkedin.com/in/eldar-nasyrov-a0391b177/'
            target='_blank'>
            &nbsp;Linkedin,
          </Link>
          <Link href='https://twitter.com/ildarDanilovich' target='_blank'>
            &nbsp;twitter,{' '}
          </Link>
          <Link href='https://github.com/buugaaga' target='_blank'>
            &nbsp;github
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}
