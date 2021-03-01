import { useState } from 'react';

function useItemSelection( { setSelection, showDetails }) {
    const [dragging, setDragging] = useState(false);
    const [itemSelected, setitemSelected] = useState(false);

    const handleItemMouseUp = item => {
        if (!itemSelected) return;
        if (!dragging) {
            setSelection(item);
            showDetails(true);
        }
        setDragging(false);
        setitemSelected(false);
    }

    const handleItemMouseDown = () => {
        setitemSelected(true);
    }

    const handleItemMouseMove = () => {
        if (!itemSelected) return;
        setDragging(true);
    }

    const handleItemMouseLeave = () => {
        setDragging(false);
        setitemSelected(false);
    }

    const handleItemTouchStart = () => {
        setitemSelected(true);
    }

    const handleItemTouchEnd = item => {
        if (!itemSelected) return;
        if (!dragging) {
            setSelection(item);
            showDetails(true);
        }
        setDragging(false);
        setitemSelected(false);
    }

    const handleItemTouchMove = () => {
        if (!itemSelected) return;
        setDragging(true);
    }

    const handleItemTouchLeave = () => {
        setDragging(false);
        setitemSelected(false);
    }

    return {
        handleItemMouseUp,
        handleItemMouseDown,
        handleItemMouseMove,
        handleItemMouseLeave
    };
}

export default useItemSelection;