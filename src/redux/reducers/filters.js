const initialState = {
    sortBy: 'popular',
    category: 0
}

const filters = (state = initialState, action) => {

    if ( action.type === "SET_SORT_BY") {
        return {
            ...state,
            sortBy: action.payload,
        }
    } else {
        return state;
    }

}

export default filters;