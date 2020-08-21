export const callUserList = (userList) =>{
    return {
        type: 'FETCH_USERLIST_SUCCESS',
        payload: userList
    }
}