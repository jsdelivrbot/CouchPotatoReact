import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router';
import { DEFAULT_IMAGE } from '../constants/constans';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin:'20px',
  },
  gridList: {
    overflowY: 'auto',
  },
  gridStyle : {
      padding:"20px",
  }
};

const GridProps = {
    cellHeight: 350,
    cols : 3,
    style : styles.gridList
}


class TvShowComponent extends Component{

    render(){
    const { TvShows } = this.props;

        return(
            <GridList {...GridProps}>
                { TvShows.map((show) => { return this.renderTile(show)  } )}
            </GridList>

        );
    }

    renderTile(show){
        const { id, name, image } = show.show;
            return(
                <GridTile
                key = {show.id}
                title = {name}
                containerElement = { <Link to={`shows/${id}`}/> }
                >
                {image ? (
                    <img src={image.original} />
                ): (
                    <img src={ DEFAULT_IMAGE }/>
                )}

            </GridTile>
        )
    }
}

export default TvShowComponent
