const helloValueReducer = function helloValueReducer(state = [], action) {
    switch(action.type) {
        case 'SET_VALUE': {
            return {
                ...state,
                helloValue: action.helloValue,
            };
        }
        default:
            return state;
    }
}


export const setHelloValueCreator = helloValue => {
    return { type: 'SET_VALUE', helloValue: helloValue }
}

export default helloValueReducer;