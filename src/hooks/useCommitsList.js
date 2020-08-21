import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import callAPI from './../callAPI';
import { callCommitsList } from '../action/commits';

const useCommitsList = (owner, repoName) => {
    
    const endpoint = `repos/${owner}/${repoName}/commits`;

    const commitsList = useSelector(state => state.commitsList);
    const dispatch = useDispatch();

    useEffect(() => {

        if(!owner.length) return;
        dispatch({type: 'FETCHING_COMMITSLIST'});
        callAPI(endpoint).then(res => {
            const action = callCommitsList(res.data);
            dispatch(action);
        })
    }, [endpoint, owner, repoName, dispatch]);

    return commitsList;
}

export default useCommitsList;