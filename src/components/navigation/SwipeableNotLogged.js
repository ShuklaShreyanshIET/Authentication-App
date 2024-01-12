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
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
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
      <List className="drawerUpper">

        <Link to="/">
            <ListItem button>
              <ListItemText>MinApp</ListItemText>
            </ListItem>
        </Link>

      </List>

      <Divider />

      <List className="drawer drawerUnder">
          <Link to="/">
            <ListItem>
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary="Explore"/>
            </ListItem>
          </Link>

          <Link to="/login">
            <ListItem>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText primary="Login"/>
            </ListItem>
          </Link>

          <Link to="/login">
            <ListItem>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary="Signup / Login"/>
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
  let classNameProfile = (useLocation().pathname === "/signup") ? ' activeNavExplore' : ' NotActiveNavExplore';

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <div className="content-nav">
      <BackButton/>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="navbarMenu">
            <Link to="/signup" className="profileAvatar">
              <Button>
                <PersonAddIcon  className={classes.signUpIconNav + classNameProfile}/>
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