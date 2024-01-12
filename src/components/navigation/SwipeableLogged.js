import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ForumIcon from '@material-ui/icons/Forum';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import BackButton from '../section/Buttons/BackButton';
import {
  Link, useLocation
} from "react-router-dom";


const useStyles = makeStyles({
  list: {
    width: 375,
  },
  fullList: {
    width: 'auto',
  },
  exploreIcon: {
    color: 'white',
    fontSize: '55px',
    marginTop: '-10px',
    marginRight: '10px',
  },
  exploreIconNav: {
    fontSize: '50px',
    color: 'grey',

  },
  menuIcon: {
    color: 'grey',
    fontSize: '50px',
  },
  signUpIconNav: {
    color: 'grey',
    fontSize: '50px',
  },
  AvatarIconNav: {
    color: 'grey',
    fontSize: '50px'
  },
  WhatsHotIconNav: {
    color: '#ff3a75f5',
    fontSize: '35px'
  }
});

export default function SwipeNavigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="drawer drawerUpper">

          <Link to="/">
            <ListItem button>
              <ListItemText primary={"MinApp"}/>
            </ListItem>
          </Link>

      </List>

      <Divider />

      <List className="drawer drawerUnder">

          <Link to="/">
            <ListItem>
              <ListItemIcon>
                <WhatshotIcon className={classes.WhatsHotIconNav}/>
              </ListItemIcon>
              <ListItemText  primary="Explore"/>
            </ListItem>
          </Link>
          <Link to="/profile">
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          </Link>

          <Link to="/messages" >
          <ListItem>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          </Link>

          <Link to="/listing">
          <ListItem>
            <ListItemIcon>
              <AddPhotoAlternateIcon  />
            </ListItemIcon>
            <ListItemText primary="Listing"/>
          </ListItem>
          </Link>
          <Link to="/settings">
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItem>
          </Link>

          <Link to="/logout">
          <ListItem>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Logout"/>
          </ListItem>
          </Link>

          <div className="listFooter">
            <Divider/>
            <ListItem>
              <div>
                <div className="listFooterAddress">
                  <h4>Voresapp.dk</h4>
                  <p>Random Gade 34</p>
                  <p>1930 København V</p>
                  <p>+47 47172572</p>
                </div>
                <div>
                  <h4>Support</h4>
                  <p> Du kan læse om vores <Link to="/betingelser">generelle betingelser</Link> og <Link to="/persondatapolitik">persondatapolitik</Link> her</p>
                </div>
              </div>
            </ListItem>
          </div>

          
      </List>
    </div>
  );

  let className = (useLocation().pathname === "/") ? ' activeNavExplore' : ' NotActiveNavExplore';
  let classNameProfile = (useLocation().pathname === "/profile") ? ' activeNavExplore' : ' NotActiveNavExplore';


  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className="content-nav">
      <BackButton/>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="navbarMenu">
            <Link to="/profile" className="profileAvatar">
                <Button>
                  <PersonIcon className={classes.AvatarIconNav + classNameProfile}/>
                </Button>
            </Link>
            <Link to="/">
              <Button>
                <WhatshotIcon className={classes.exploreIconNav + className}/>
              </Button>
            </Link>
              <Button onClick={toggleDrawer(anchor, true)}>
              {state[anchor] ? <MenuOpenIcon className={classes.menuIcon} fontSize="large"/> : <MenuIcon className={classes.menuIcon} fontSize="large"/>}
              </Button>
          </div>
          
          <SwipeableDrawer
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}