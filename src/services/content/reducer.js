import actionType from './actionType';

const initialState = {
    contentList: null,

};
export const contentListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CONTENT_SUCCESS:
            return {
                ...state,
                contentList: action.payload
            };
        case actionType.CONTENT_FAILURE:
            return {
                ...state,
                contentList: action.error
            };

        default:
            return state;
    }
};

