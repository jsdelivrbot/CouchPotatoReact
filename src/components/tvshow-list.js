import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { Grid, Row, Cell } from 'react-inline-grid';
import TvShowComponent from './tvshow_component';
import { actionSchedule } from '../actions/actions'



class TvShowList extends Component{

    constructor(props){
        super(props);

    }

    componentWillMount(){
        this.props.dispatch(actionSchedule())
    }


    render(){
        const { TvShows } = this.props.shows;

        if(TvShows.length === 0){
            return(
                <div>
                    <CircularProgress size = {80} thickness= {7} />
                </div>
            );
        }

        return(
            <div style = {{ marginTop: "20px" }}>
                <Grid>
                    <Row is="center nospace">
                        <Cell is="8 tablet-4 phone-2 nospace">
                            <TvShowComponent TvShows = { TvShows } />
                        </Cell>
                    </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({ shows }){
    return {
        shows
    }
}



export default connect(mapStateToProps)(TvShowList)
