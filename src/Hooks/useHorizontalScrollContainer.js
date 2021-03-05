import { useState, useEffect } from 'react';

import useCurrentWidth from '../Hooks/useCurrentWidth';

function useHorizontalScrollContainer( { scrollDivRef } ) {
    const [scrollDivScrollWidth, setScrollDivScrollWidth] = useState(0);
    const [scrollDivClientWidth, setScrollDivClientWidth] = useState(0);

    const [dragging, setDragging] = useState(false);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [pointerPosition, setPointerPosition] = useState( { x: -1, y: -1} );
    
    let width = useCurrentWidth();

    const handlePointerDown = e => {
        let x, y;

        if (e.changedTouches) {
            x = e.changedTouches[0].clientX;
            y = e.changedTouches[0].clientY;
        } else {
            x = e.clientX;
            y = e.clientY;

            e.stopPropagation();
            e.preventDefault();
        }

        setDragging(true);
        setPointerPosition( { x, y } );
    } 

    const handlePointerMove = e => {
        if (!dragging) return;

        let x, y;

        if (e.changedTouches) {
            x = e.changedTouches[0].clientX;
            y = e.changedTouches[0].clientY;
        } else {
            x = e.clientX;
            y = e.clientY;
        }

        const shift = scrollAmount + pointerPosition.x - x;
        if (shift > scrollDivScrollWidth - (scrollDivClientWidth) + 30) {
            return;
        }

        setScrollAmount(shift < 0 ? 0 : shift);
        setPointerPosition( { x, y } );
    }

    const handlePointerEndDrag = () => {
        if (!dragging) return;
        setDragging(false);
    }

    useEffect(() => {
        setScrollAmount(0);
        setScrollDivClientWidth(scrollDivRef.current.clientWidth);
    }, [width]);

    return {
        scrollAmount,
        handlePointerDown,
        handlePointerMove,
        handlePointerEndDrag,
        setScrollDivScrollWidth
    };
}

export default useHorizontalScrollContainer;