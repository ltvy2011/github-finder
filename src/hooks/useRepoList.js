import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {callRepoList} from './../action/repoList';
import callAPI from '../callAPI';

const useRepoList = (owner, page) => {
    const endpoint = `users/${owner}/repos`;
    const perPage = 10;

    const repoList = useSelector(state => state.repoList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!owner.length) return;
        dispatch({type: 'FETCHING_REPOLIST'});
        callAPI(endpoint, {page, per_page: perPage}).then(res =>{
            const action = callRepoList(res.data);
            dispatch(action);
        });
    }, [endpoint, owner, page, dispatch]);

    return repoList;
};

export default useRepoList;