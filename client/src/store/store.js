import {createStore} from "redux";

const INITIAL_STATE = {
    data: ['']
};

function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_USER":
            return {...state, data: [...state.data, action.payload]};
        default:
            return state;
    }
};

const store = createStore(users);

export default store;