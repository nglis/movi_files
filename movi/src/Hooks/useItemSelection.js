import { useState } from 'react';

function useItemSelection( { setSelection, showDetails }) {
    const [dragging, setDragging] = useState(false);
    const [itemClicked, setItemClicked] = useState(false);

    const handleItemMouseUp = item => {
        if (!dragging) {
            setSelection(item);
            showDetails(true);
        }
        setDragging(false);
        setItemClicked(false);
    }

    const handleItemMouseDown = () => {
        setItemClicked(true);
    }

    const handleItemMouseMove = () => {
        if (!itemClicked) return;
        setDragging(true);
    }

    return {
        handleItemMouseUp,
        handleItemMouseDown,
        handleItemMouseMove
    };
}

export default useItemSelection;