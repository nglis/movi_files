import React, { useEffect, useRef } from 'react';
import _ from 'lodash';

import { useStyles } from '../Styles/SubContainers/HorizontalScrollContainer';

import useItemSelection from '../Hooks/useItemSelection';
import useHorizontalScrollContainer from '../Hooks/useHorizontalScrollContainer';

function HorizontalScrollContainer(props) {
    const { collectionTitle, content, setSelection, showDetails } = props;

    const scrollDivRef = useRef();
    const classes = useStyles();

    const {
        scrollAmount,
        handleMouseDown,
        handleMouseMove,
        handleEndDrag,
        setScrollDivScrollWidth
    } = useHorizontalScrollContainer( { scrollDivRef } );

    const {
        handleItemMouseUp,
        handleItemMouseDown,
        handleItemMouseMove,
        handleItemMouseLeave
    } = useItemSelection( { setSelection, showDetails });

    useEffect(() => {
        setScrollDivScrollWidth(scrollDivRef.current.scrollWidth);
    }, [_.get(scrollDivRef.current, 'scrollWidth', scrollDivRef.current)]);

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
                    {content.map((item, idx) => (
                        <img 
                            className={classes.img}
                            key={collectionTitle + "-" + _.get(item, 'title', `movie-${idx}`)} 
                            src={_.get(item, 'img', null)} 
                            alt={_.get(item, 'title', 'Unknown Title')}
                            onMouseUp={() => handleItemMouseUp(item)}
                            onMouseDown={() => handleItemMouseDown()}
                            onMouseMove={() => handleItemMouseMove()}
                            onMouseLeave={() => handleItemMouseLeave()}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HorizontalScrollContainer;