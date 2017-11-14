import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import DEFAULT_IMAGE from '../constants/constans';
import Avatar from 'material-ui/Avatar';


class EpisodeView extends Component {


    render(){
        const { episodeList } = this.props;


        return(
            <div style = {{ height:'auto', maxHeight: '100vh', overflow: 'auto'}}>
                <List>
                    { episodeList.map((episode) => { return this.renderListItems(episode) }) }
                </List>
            </div>
        );
    }

    renderListItems(episode){
        const { name, number, season, image } = episode;
        let summary = episode.summary;
        summary = summary ? summary.replace(/(<([^>]+)>)/ig, "") : '';


        return(
            <ListItem
             key = {number}
             primaryText = {`S${season}E${number} ${name}`}
             leftAvatar = { <Avatar src = { image ? image.medium : DEFAULT_IMAGE } /> }
             secondaryText = { summary }
             secondaryTextLines = {2}>
            </ListItem>

        );
    }
}

export default EpisodeView
