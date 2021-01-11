import { useState, useEffect } from 'react';

import useCurrentWidth from '../Hooks/useCurrentWidth';

function useHorizontalScrollContainer( { scrollDivRef } ) {
    const [scrollDivScrollWidth, setScrollDivScrollWidth] = useState(0);
    const [scrollDivClientWidth, setScrollDivClientWidth] = useState(0);

    const [dragging, setDragging] = useState(false);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [mousePosition, setMousePosition] = useState( { x: -1, y: -1} );
    
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

    return {
        scrollAmount,
        handleMouseDown,
        handleMouseMove,
        handleEndDrag,
        setScrollDivScrollWidth
    };
}

export default useHorizontalScrollContainer;