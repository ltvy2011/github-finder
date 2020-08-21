export const callRepoList = (repoList) => {
    return {
        type: 'FETCH_REPOLIST_SUCCESS',
        payload: repoList
    }
}