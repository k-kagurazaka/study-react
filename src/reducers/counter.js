import initialState from './initialState'

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                count: state.count + 1
            });
        default:
            return state
    }
};

export default counter
