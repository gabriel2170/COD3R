export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}



export function reducer(state, action) {
    switch (action, type) {
        case 'add2':
            return { ...state, number: state.number + 2 }
        case 'mult7':
            return { ...state, number: state.number * 7 }
        case 'div25':
            return { ...state, number: state.number / 25 }
        case 'int':
            return { ...state, number: parseInt(state.number) }
        case 'Addx':
            return { ...state, number: state.number + action.payload }
        case 'login':
            return { ...state, user: { name: 'gabriel' } }
        default:
            return state
    }
}


