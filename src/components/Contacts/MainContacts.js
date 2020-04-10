import React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles( theme => ({
  root: {
    marginTop: 10
  }
}))

export const MainContacts = () => {

  const classes = useStyles()

  return (
    <Box mt={10} ml={5}>
      Contacts
    </Box>
  )
}
