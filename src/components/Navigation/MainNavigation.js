import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import WorkIcon from '@material-ui/icons/Work'
import ContactsIcon from '@material-ui/icons/Contacts'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'
import { Link } from 'react-router-dom';

// import fccIcon from '../images/fcc.svg'
import SvgIcon from '@material-ui/icons/MoveToInbox';


export const MainNavigation = () => {
 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const pages = ['home', 'works', 'contacts']
  const list = () => (
    <div
      role='representation'
    >
      <List>
        {pages.map((text, index) => (
          <ListItem button key={text}  component={Link} to={`/${pages[index]}`}>
            <ListItemIcon>
              { index  === 0 ? <HomeIcon /> : 
                index  === 1 ? <WorkIcon /> :
                index === 2 ? <ContactsIcon /> : {}
              }            
            </ListItemIcon> 
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Button href='https://www.linkedin.com/in/eldar-nasyrov-a0391b177/' target='_blank'>
            <ListItemIcon><LinkedinIcon /></ListItemIcon>
          </Button>
          <Button href='https://twitter.com/ildarDanilovich' target='_blank'>
            <ListItemIcon><TwitterIcon /></ListItemIcon>
          </Button>
          <Button href='https://github.com/buugaaga' target='_blank'>
            <ListItemIcon><GithubIcon /></ListItemIcon> 
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <>
        <Button onClick={toggleDrawer('top', true)}>
          <MenuIcon />
        </Button>
        <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
}
