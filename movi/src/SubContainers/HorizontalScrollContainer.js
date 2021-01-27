import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
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
    }, [_.get(scrollDivRef.current, 'scrollWidth', scrollDivRef.current)]);

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
                className={classes.root}
                onMouseDown={e => handleMouseDown(e)}
                onMouseMove={e => handleMouseMove(e)}
                onMouseUp={() => handleEndDrag()}
                onMouseLeave={() => handleEndDrag()}
            >
                <div 
                    className={classes.scrollBox}
                    ref={scrollDivRef}
                    // Inline style to handle scroll amount (temporarily)
                    style={{ right: scrollAmount }}
                >
                    {/* Key is not 100% unique yet */}
                    {itemsForContainer.map((item) => (
                        <img 
                            key={item.title} 
                            className={classes.img}
                            src={item.img} 
                            alt={item.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HorizontalScrollContainer;