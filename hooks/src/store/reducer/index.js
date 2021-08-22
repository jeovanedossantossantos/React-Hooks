export function reducer(state, action) {
    switch (action.type) {
        case 'add_2':
            return { ...state, number: state.number + 2 };

        case 'login':
            return { ...state, user: { name: action.payload } }
        case "multi_7":
            return { ...state, number: state.number * 7 }
        case "divid_25":
            return { ...state, number: state.number / 25 }
        case "Int":
            return { ...state, number: parseInt(state.number) }
        case "add_n":
            return { ...state, number: state.number + action.payload }

        default:
            return state;
    }
}