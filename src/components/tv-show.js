import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Grid, Row, Cell } from 'react-inline-grid'
import { DEFAULT_IMAGE } from '../constants/constans.js'
import EpisodeView from './episode-view';
import _ from 'lodash';
import { store } from '../index';

const imageStyles = {
    height: '500px',
}

const gridStyle = {
    marginTop: '20px'
}

const buttonStyles = {
    minWidth: '50px',
    padding: "0px"
}

class TvShow extends Component{
    constructor(props){
        super(props);

        this.updateSeasonChoice = this.updateSeasonChoice.bind(this);
    }

    componentWillMount(){
        store.dispatch({ type: 'FETCH_TVSHOW_REQUESTED', id : this.props.params.id })
        store.dispatch({ type: 'FETCH_SEASONS_REQUESTED',id : this.props.params.id })
    }

    updateSeasonChoice(id){
        store.dispatch({ type: 'SELECT_SEASON_REQUESTED', id })
    }

    renderSeasonButtons(){
        const keys = _.keys(this.props.shows.seasons)
        return keys.map((season) => {
            return(
                <FlatButton label={season < 10 ? season + " " : season } style = {buttonStyles} key = { season } onClick = { (() => { this.updateSeasonChoice(season) }) } />
            );
        });
    }

    render(){
        if(!this.props.shows.activeTvShow || !this.props.shows.seasons){
            return(
                <div>
                    <CircularProgress />
                </div>
            );
        }
        const { name, status, image, officialSite } = this.props.shows.activeTvShow;
        const { selectedSeason } = this.props.shows;
        let summary = this.props.shows.activeTvShow.summary;
        summary = summary.replace(/(<([^>]+)>)/ig, "");
        return(
            <Grid style= { gridStyle } >
                <Row>
                    <Cell is="3 tablet-4 phone-2 offset-2">
                    <Card>
                        <CardMedia
                            overlay = {<CardTitle title = {name} subtitle={ <a href={`officialSite ? officialSite : ''`} style= {{textDecorationLine: 'none'}} > { officialSite} </a> } />}>
                            { image ? (
                                <img src = {image.original} style = { imageStyles } />
                            ) : (
                                <img src = {DEFAULT_IMAGE} style = { imageStyles } />
                            )}

                        </CardMedia>
                        <CardHeader title = {name} subtitle = {status} actAsExpander = {true} showExpandableButton = {true} />

                        <CardText expandable = {true}>
                            { summary }
                        </CardText>
                        <CardActions>
                            <h4 style = {{ marginRight: "10px" }}>Seasons</h4>
                            {this.renderSeasonButtons()}
                        </CardActions>
                    </Card>
                    </Cell>
                    <Cell is="3 tablet-4 phone-2 offset-2">
                        { selectedSeason &&
                         <EpisodeView episodeList = { selectedSeason } /> }
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

export default connect(mapStateToProps)(TvShow)
