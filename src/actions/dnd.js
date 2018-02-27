export const DRAG_START = "DRAG_START";
export const DRAG_FINISH = "DRAG_FINISH";

export const dragStart = (target) => {
    return {
        type: DRAG_START,
        target
    }
};

export const dragFinish = (dropZone) => {
    return {
        type: DRAG_FINISH,
        dropZone
    }
};