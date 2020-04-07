import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import ukLogo from '../../images/uk.svg'
import ruLogo from '../../images/rus.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
   
    '& + $track': {
      backgroundImage: `url(${ukLogo})`,
      backgroundSize: 'cover',
    },    
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundImage: `url(${ruLogo})`,
        opacity: 1,
        border: 'none',
      }
    }
  },
  thumb: {
    width: 25,
    height: 25,
    backgroundColor: theme.palette.common.white,
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
  },
  checked: {},
  focusVisible: {},
}))

export  function LanguageSwitch({ setLanguage, ru }) {

  const classes = useStyles()
  const handleChange = () => {
    setLanguage(!ru)
  };

  return (
    <FormControlLabel
      control={<Switch 
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        checked={ru}
        onChange={handleChange}
        name="language"
      />}
      label=""
    />
  );
}