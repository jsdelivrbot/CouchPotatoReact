import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/actions'



class NavBar extends Component{

    constructor(props){
        super(props);
    }

    logout(){
        this.props.dispatch(logoutRequest())
    }

    render(){
        return(
            <AppBar title="Couchpotato V2.0"
            onLeftIconButtonTouchTap = { this.props.onToggle }
            iconElementRight = { this.props.user.isLoggedIn ? <LoggedIn logout = { this.logout.bind(this) } /> : <Login /> }>

            </AppBar>
        );
    }
}

const Login = (props) => {
    return(
        <Link to="/login"><FlatButton { ...props } style = { { color: 'white' } } label="login" /></Link>
    );
}

const LoggedIn = (props) => {
    return(
        <IconMenu
            {...props}
            iconButtonElement = { <IconButton> <MoreVertIcon /> </IconButton>}
            targetOrigin = {{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin = {{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem primaryText = "Favorites" />
                <MenuItem primaryText = "Help" />
                <MenuItem primaryText = "Something" />
                <MenuItem primaryText = "Logout" onClick = { () => props.logout() } />

        </IconMenu>
    );
}

function mapStateToProps({ user }){
    return{
        user
    }
}

export default connect(mapStateToProps)(NavBar);
