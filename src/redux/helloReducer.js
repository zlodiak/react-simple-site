const helloReducer = function helloReducer(state = [], action) {
    switch(action.type) {
        case 'CHANGE_VALUE': {
            const x = {
                ...state,
                newHelloText: action.helloText
            };
            return x;
        }
        default:
            return state;
    }
}


export const changeHelloTextCreator = helloText => {
    return { type: 'CHANGE_VALUE', helloText: helloText }
}

export default helloReducer;