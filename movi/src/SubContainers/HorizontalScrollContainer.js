import React, { useState, useEffect, useRef } from 'react';
import { convertDataForScrollContainer } from '../Other/MovieDataHandler';

import { useStyles } from '../Styles/SubContainers/HorizontalScrollContainer';

import useCurrentWidth from '../Hooks/useCurrentWidth';

const CONTAINER_ITEM_LIMIT = 20;

function HorizontalScrollContainer(props) {
    const { collectionTitle, content } = props;

    const [scrollDivScrollWidth, setScrollDivScrollWidth] = useState(0);
    const [scrollDivClientWidth, setScrollDivClientWidth] = useState(0);

    const [dragging, setDragging] = useState(false);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [mousePosition, setMousePosition] = useState( { x: -1, y: -1} );

    const [itemsForContainer, setItemsForContainer] = useState([]);

    const scrollDivRef = useRef();
    const classes = useStyles();

    let width = useCurrentWidth();

    const handleMouseDown = e => {
        setDragging(true);
        setMousePosition( { x: e.clientX, y: e.clientY } );

        e.stopPropagation();
        e.preventDefault();
    } 

    const handleMouseMove = e => {
        if (!dragging) return;

        const shift = scrollAmount + mousePosition.x - e.clientX;
        if (shift > scrollDivScrollWidth - (scrollDivClientWidth) + 30) {
            return;
        }

        setScrollAmount(shift < 0 ? 0 : shift);
        setMousePosition( { x: e.clientX, y: e.clientY } );
    }

    const handleEndDrag = () => {
        if (!dragging) return;

        setDragging(false);
    }

    useEffect(() => {
        setScrollAmount(0);
        setScrollDivClientWidth(scrollDivRef.current.clientWidth);
    }, [width]);

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
                    {itemsForContainer.map((item) => (
                        <img className={classes.imgDimensions} src={item.img} alt={item.title} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HorizontalScrollContainer;