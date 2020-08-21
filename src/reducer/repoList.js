const initialState = {
    repoList: {
        items: [],
    },
    loading: ''
}

const callRepoList = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCHING_REPOLIST': {
            return {
                ...state,
                loading: true,
            }
        }
        case 'FETCH_REPOLIST_SUCCESS': {
            return {
                ...state,
                repoList: action.payload,
                loading: false
            }
        }
        default: return state;
    }
}

export default callRepoList;