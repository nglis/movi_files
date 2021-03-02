import React, { useEffect, useRef } from 'react';
import _ from 'lodash';

import { useStyles } from '../Styles/SubContainers/HorizontalScrollContainer';

import useItemSelection from '../Hooks/useItemSelection';
import useHorizontalScrollContainer from '../Hooks/useHorizontalScrollContainer';

function HorizontalScrollContainer(props) {
    const { collectionTitle, content, setSelection, showDetails } = props;

    // TODO: Add swipes?

    const scrollDivRef = useRef();
    const classes = useStyles();

    const {
        scrollAmount,
        handlePointerDown,
        handlePointerMove,
        handlePointerEndDrag,
        setScrollDivScrollWidth
    } = useHorizontalScrollContainer( { scrollDivRef } );

    const {
        handleItemPointerUp,
        handleItemPointerDown,
        handleItemPointerMove,
        handleItemPointerLeave
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
                onTouchStart={e => handlePointerDown(e)}
                onTouchMove={e => handlePointerMove(e)}
                onTouchEnd={() => handlePointerEndDrag()}
                onMouseDown={e => handlePointerDown(e)}
                onMouseMove={e => handlePointerMove(e)}
                onMouseUp={() => handlePointerEndDrag()}
                onMouseLeave={() => handlePointerEndDrag()}
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
                            onMouseUp={() => handleItemPointerUp(item)}
                            onMouseDown={() => handleItemPointerDown()}
                            onMouseMove={() => handleItemPointerMove()}
                            onMouseLeave={() => handleItemPointerLeave()}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HorizontalScrollContainer;