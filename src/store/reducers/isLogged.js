const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGGED_ON':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;