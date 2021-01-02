import React, { useState, useEffect, useRef } from 'react';

import img from '../mission_impossible_poster.jpg';
import { useStyles } from '../Styles/SubContainers/HorizontalScrollContainer';

const tileData = [
    // {
    //     img: img,
    //     title: 'TEST',
    //     author: 'test'
    // },
];

function HorizontalScrollContainer(props) {
    const { collectionTitle } = props;

    const [scrollDivScrollWidth, setScrollDivScrollWidth] = useState(0);
    const [scrollDivClientWidth, setScrollDivClientWidth] = useState(0);

    const [dragging, setDragging] = useState(true);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [mousePosition, setMousePosition] = useState( { x: -1, y: -1} );

    const scrollDivRef = useRef();
    const classes = useStyles();

    const handleMouseDown = e => {
        setDragging(true);
        setMousePosition( { x: e.clientX, y: e.clientY } );

        e.stopPropagation();
        e.preventDefault();
    } 

    const handleMouseMove = e => {
        if (!dragging) return;

        const shift = scrollAmount + mousePosition.x - e.clientX;

        if (shift > scrollDivScrollWidth - (scrollDivClientWidth)) {
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
        setScrollDivScrollWidth(scrollDivRef.current.scrollWidth);
        setScrollDivClientWidth(scrollDivRef.current.clientWidth);
    }, []);

    return(
        <>
            <div className={classes.text}>
                My Movies
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
                    {tileData.map((tile) => (
                        <img className={classes.imgDimensions} src={tile.img} alt={tile.title} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HorizontalScrollContainer;