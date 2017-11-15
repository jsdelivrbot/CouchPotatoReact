import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Grid, Row, Cell } from 'react-inline-grid'
import { DEFAULT_IMAGE } from '../constants/constans.js'
import EpisodeView from './episode-view';
import _ from 'lodash';
import { actionTvShow, actionSeasons, actionSelectSeason, addFavorite } from '../actions/actions';
import { findTvShow } from '../reducers/reducer_tvshows';

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
        this.addFavorite = this.addFavorite.bind(this);
    }

    componentWillMount(){
        this.props.dispatch( actionTvShow(this.props.params.id))
        this.props.dispatch( actionSeasons(this.props.params.id))
    }

    updateSeasonChoice(id){
        this.props.dispatch( actionSelectSeason(id) )
    }

    renderSeasonButtons(){
        const keys = _.keys(this.props.state.shows.seasons).filter((key) => this.props.state.shows.seasons[key].length !== 0)
        return keys.map((season) => {
            return(
                <FlatButton label={season < 10 ? season + " " : season } style = {buttonStyles} key = { season } onClick = { (() => { this.updateSeasonChoice(season) }) } />
            );
        });
    }

    addFavorite(event){
        // const favshow = this.props.state.shows.TvShows.find((tvshow) => {
        //     console.log(tvshow)
        // });
        // console.log(this.props.state.shows)
        // for(let i = 0; i < this.props.state.shows.TvShows.length; i++){
        //     console.log(this.props.state.shows.TvShows[i]);
        // }
        // console.log(this.props.state.shows.activeTvShow);
        // const foundTvShow = findTvShow(this.props.state, this.props.state.shows.activeTvShow.id);
        // console.log(foundTvShow);
        this.props.dispatch(addFavorite(this.props.state.shows.activeTvShow))
    }

    render(){
        const { shows } = this.props.state;
        if(!shows.activeTvShow || !shows.seasons){
            return(
                <div>
                    <CircularProgress />
                </div>
            );
        }
        const { name, status, image, officialSite } = shows.activeTvShow;
        const { selectedSeason } = shows;
        let summary = shows.activeTvShow.summary;
        summary = summary.replace(/(<([^>]+)>)/ig, "");
        return(
            <div style = {{ height:'auto', maxHeight: '100vh', overflow: 'auto'}}>
            <Grid style= { gridStyle } >
                <Row>
                    <Cell is="3 tablet-4 phone-2 offset-2">
                    <Card>
                        <CardMedia
                            overlay = {<CardTitle title = {name}
                            subtitle={ <a href={`officialSite ? officialSite : ''`}
                            style= {{textDecorationLine: 'none'}} > { officialSite} </a> }/>}

                            >
                            { image ? (
                                <img src = { image.original } style = { imageStyles } />
                            ) : (
                                <img src = { DEFAULT_IMAGE } style = { imageStyles } />
                            )}

                        </CardMedia>
                        <CardHeader title = {name} subtitle = {status} actAsExpander = {true} showExpandableButton = {true} />
                            children = { <IconButton onClick = { (event) => this.addFavorite(event) }><StarBorder color="yellow" /></IconButton> }
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
        </div>
        );
    }

}


function mapStateToProps(state){
    return {
        state
    }
}

export default connect(mapStateToProps)(TvShow)
