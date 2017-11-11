import React from 'react';
import { Link } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

const subheaderStyles = {
    textdecoration: 'none',
    fontSize: '16px'
}

const DrawerContent = () => {
    return(
        <div>
            <List>
                <Subheader inset = { true } style = { subheaderStyles }> Welcome </Subheader>
                <Link to="/">
                    <ListItem primaryText="Home" leftIcon= {<ContentInbox />}/>
                </Link>
                <ListItem primaryText="Favorites" leftIcon={<ActionGrade />} />
                <Link to="/search">
                    <ListItem primaryText="Search" leftIcon={<ContentSend />} />
                </Link>
            </List>
        </div>
    )
}

export default DrawerContent
