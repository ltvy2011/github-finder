export const callCommitsList = (commitsList) => {
    return {
        type: 'FETCH_COMMITSLIST_SUCCESS',
        payload: commitsList 
    }
};