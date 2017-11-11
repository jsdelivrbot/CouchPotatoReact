import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Cell } from 'react-inline-grid'
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import { searchTvShow } from '../actions/index';
import TvShowComponent from './tvshow_component';

const LABEL_TEXT = "Search for a tvshow";


const styles = {
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500
    },
    gridList: {
      overflowY: 'auto',
    },

    divStyle: {
        marginBottom: '20px'
    }
};

class SearchTvShow extends Component{

    constructor(props){
        super(props);

        this.onInputChanged = this.onInputChanged.bind(this);
        this.state = {
            term : ''
        }
    }

    onInputChanged(event, newValue){
        this.setState({ term: newValue });
        if(newValue.length > 3){
            this.props.searchTvShow(newValue)
        }
    }

    render(){

        const { searchResult } = this.props.shows;

        return(
            <Grid>
                <Row is="center nospace">
                    <Cell is="8 tablet-4 phone-2 nospace">
                        <div style = { styles.divStyle }>
                            <TextField
                                floatingLabelText = { LABEL_TEXT }
                                floatingLabelStyle = {styles.floatingLabelStyle}
                                floatingLabelFocusStyle = {styles.floatingLabelFocusStyle}
                                fullWidth = {true}
                                onChange = { this.onInputChanged }
                                />
                        </div>
                        <div>
                            { searchResult.length > 0 &&
                             <TvShowComponent TvShows = { searchResult } /> }
                        </div>
                    </Cell>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps({ shows }){
    return {
        shows
    }
}

export default connect(mapStateToProps, { searchTvShow })(SearchTvShow)
