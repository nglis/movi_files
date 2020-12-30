import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';

import { useStyles } from '../Styles/SubContainers/HorizontalScrollContainer';


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

function HorizontalScrollContainer() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
            {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                    title={tile.title}
                    classes={{
                    root: classes.titleBar,
                    title: classes.title,
                    }}
                    actionIcon={
                    <IconButton aria-label={`star ${tile.title}`}>
                        <StarBorderIcon className={classes.title} />
                    </IconButton>
                    }
                />
                </GridListTile>
            ))}
            </GridList>
        </div>
    );
}

export default HorizontalScrollContainer;