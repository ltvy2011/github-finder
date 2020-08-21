var initialState = {
    keyword: '',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SEARCH': {
            initialState.keyword = action.payload;
            return state;
        }
        default: return state;
    } 
}

export default searchReducer;