export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const setSelectedItem = (Item) => ({
    type: SET_SELECTED_ITEM,
    payload: Item,
});

export const openModal = () => ({
    type: OPEN_MODAL,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
