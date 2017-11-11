import React from 'react';
import AppBar from 'material-ui/AppBar';


const NavBar = (props) => {
    return(
        <AppBar title="Couchpotato V2.0"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap = { props.onToggle } />
    );
}

export default NavBar;
