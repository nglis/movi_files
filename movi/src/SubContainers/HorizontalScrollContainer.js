import React, { useState, useEffect, useRef } from 'react';
import { convertDataForScrollContainer } from '../Other/MovieDataHandler';

import { useStyles } from '../Styles/SubContainers/HorizontalScrollContainer';

import useHorizontalScrollContainer from '../Hooks/useHorizontalScrollContainer';

const CONTAINER_ITEM_LIMIT = 20;

function HorizontalScrollContainer(props) {
    const { collectionTitle, content } = props;

    const [itemsForContainer, setItemsForContainer] = useState([]);

    const scrollDivRef = useRef();
    const classes = useStyles();

    const {
        scrollAmount,
        handleMouseDown,
        handleMouseMove,
        handleEndDrag,
        setScrollDivScrollWidth
    } = useHorizontalScrollContainer( { scrollDivRef } );


    useEffect(() => {
        setScrollDivScrollWidth(scrollDivRef.current.scrollWidth);
    }, [itemsForContainer]);

    useEffect(() => {
        const updatedItems = convertDataForScrollContainer(content, CONTAINER_ITEM_LIMIT);
        setItemsForContainer(updatedItems);
    }, [content]);

    return(
        <>
            <div className={classes.text}>
                {collectionTitle}
            </div>
            <div 
                ref={scrollDivRef}
                className={classes.root}
                onMouseDown={e => handleMouseDown(e)}
                onMouseMove={e => handleMouseMove(e)}
                onMouseUp={() => handleEndDrag()}
                onMouseLeave={() => handleEndDrag()}
            >
                <div 
                    className={classes.scrollBox}
                    // Inline style to handle scroll amount (temporarily)
                    style={{ right: scrollAmount }}
                >
                    {itemsForContainer.map((item, idx) => (
                        <img key={item.title} className={classes.imgDimensions} src={item.img} alt={item.title} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HorizontalScrollContainer;