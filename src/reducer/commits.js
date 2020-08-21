const initialState = {
    commitsList: {
        items: [],
    },
    loading: ''
}

const callCommitsList = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCHING_COMMITSLIST': {
            return {
                ...state,
                loading: true
            }
        }
        case 'FETCH_COMMITSLIST_SUCCESS': {
            return {
                ...state,
                commitsList: action.payload,
                loading: false
            }
        }
        default: return state;
    }
}

export default callCommitsList;