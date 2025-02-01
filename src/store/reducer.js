import { SET_SELECTED_ITEM, OPEN_MODAL, CLOSE_MODAL } from './actions';

const initialState = {
    selectedItem: null,
    isModalOpen: false,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.payload,
            };
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                selectedItem: null,
            };
        default:
            return state;
    }
};

export default itemReducer;
