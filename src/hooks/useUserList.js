import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import callAPI from '../callAPI';
import { callUserList } from '../action/userList';

const useUserList = (keyword, page) => {
    const endpoint = 'search/users';

    const userList = useSelector(state => state.userList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!keyword.length) return;
        dispatch({type: 'FETCHING_USERLIST'});
        callAPI(endpoint, { q: keyword, page, per_page: 30 }).then(res =>{
            const action = callUserList(res.data);
            dispatch(action);
        });
    }, [endpoint, keyword, page, dispatch]);
    
    return userList;
};

export default useUserList;