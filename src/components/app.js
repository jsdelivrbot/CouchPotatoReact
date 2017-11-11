import React, { Component } from 'react';
import NavBar from './nav-bar';
import Drawer from 'material-ui/Drawer';
import DrawerContent from './drawer-content';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.toggleEvent = this.toggleEvent.bind(this);
    }

    toggleEvent(){
        this.setState({ open: !this.state.open })
    }

    render() {
        const drawerProps = {
            docked : false,
            open: this.state.open,
            onRequestChange: this.toggleEvent
        }


        return (
            <div className="container-fluid">
                <NavBar onToggle = { this.toggleEvent } />
                <Drawer {...drawerProps}>
                    <DrawerContent />
                </Drawer>
                <div>
                    {this.props.children}
                </div>
            </div>
            );
        }
}


export default App
