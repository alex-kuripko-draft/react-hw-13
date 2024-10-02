import {SET_FILTER} from './actions';

const initialState = {
    users: [
        {id: 1, name: 'Alex Test'},
        {id: 2, name: 'Oleksandr Kuripko'},
        {id: 3, name: 'Some User'},
        {id: 4, name: 'New User'},
    ],
    filter: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;