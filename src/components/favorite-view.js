import React, { Component } from 'react';
import { connect } from 'react-redux';
import TvShowComponent from './tvshow_component';

class FavoriteView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-md-8 col-md-offset-2" style = {{ marginTop: '20px' }}>
                <TvShowComponent TvShows = { this.props.favorites } />
            </div>
        );
    }
}

function mapStateToProps({ user }){
    return{
        favorites : user.favorites
    }
}

export default connect(mapStateToProps)(FavoriteView)
