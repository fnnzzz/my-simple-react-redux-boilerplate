import { CHECK_APP } from 'constants/actionTypes'

const mainInitialState = {
    pageTitle: 'Main Page',
    message: ''
};

export default function checkApp(state = mainInitialState, action) {
    switch(action.type){

        case CHECK_APP:
            return {
                ...state,
                message: action.message
            }

        default:
            return state;

    }
}