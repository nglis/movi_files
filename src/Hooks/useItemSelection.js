import { useState } from 'react';

function useItemSelection( { setSelection, showDetails }) {
    const [dragging, setDragging] = useState(false);
    const [itemSelected, setitemSelected] = useState(false);

    const handleItemPointerUp = item => {
        if (!itemSelected) return;
        if (!dragging) {
            setSelection(item);
            showDetails(true);
        }
        setDragging(false);
        setitemSelected(false);
    }

    const handleItemPointerDown = () => {
        setitemSelected(true);
    }

    const handleItemPointerMove = () => {
        if (!itemSelected) return;
        setDragging(true);
    }

    const handleItemPointerLeave = () => {
        setDragging(false);
        setitemSelected(false);
    }

    return {
        handleItemPointerUp,
        handleItemPointerDown,
        handleItemPointerMove,
        handleItemPointerLeave
    };
}

export default useItemSelection;