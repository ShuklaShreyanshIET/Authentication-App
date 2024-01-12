const mobileReducer = (state = false, action) => {
    switch(action.type) {
        case 'ON_MOBILE':
            return !state;
        default:
            return state;
    }
}

export default mobileReducer;