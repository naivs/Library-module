const initialState = {
    title: 'Моя библиотека'
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        default:
            return state
    }
}