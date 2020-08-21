const initialState = {
    userList: {
        items: [],
        total_count: 0
    },
    loading: ''
}

const callUserList = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_USERLIST': {
            return {
                ...state,
                loading: true,
            }
        }
        case 'FETCH_USERLIST_SUCCESS': {
            return {
                ...state,
                userList: {
                    items: action.payload.items,
                    total_count: action.payload.total_count
                },
                loading: false,
            };
        }
        case 'FETCH_USERLIST_FAIL': {
            return state;
        }
        default: return state;
    }
};

export default callUserList;