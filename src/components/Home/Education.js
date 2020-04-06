import React from 'react'
import { Grid, Typography, List, ListItem, makeStyles, ListItemText, ListItemIcon } from '@material-ui/core'
import SchoolIcon from '@material-ui/icons/School';

const useStyle = makeStyles( theme => ({
  root: {
    height: '100vh'
  },
  listRoot: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline'
  }
}))


export const Education = ({ text }) => {

  const classes = useStyle()

  return (
    <Grid container className={classes.root} justify='center'>
      <Grid item container alignItems='center' justify='center'>
        <Typography variant='h3' align='center'>
          {text.educationTitle}
        </Typography>
      </Grid>
      
      <List>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary={text.educationDiplomaTitle}
            secondary={text.educationDiplomaDescription}
          >
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary={text.educationFCCTitle}
            secondary={text.educationFCCDescription}
          >
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary={text.educationSololearnTitle}
            secondary={text.educationSololearnDescription}
          >
          </ListItemText>
        </ListItem>
      </List>    
    </Grid>
  )
}
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

// export default function AlignItemsList() {
//   const classes = useStyles();

//   return (
//     <List className={classes.root}>
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Sandra Adams
//               </Typography>
//               {' — Do you have Paris recommendations? Have you ever…'}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//     </List>
//   );
// }
