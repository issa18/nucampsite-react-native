import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null,
                                    comments: []}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: false, comments: action.payload};

        case ActionTypes.CAMPSITES_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};