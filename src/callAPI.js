import axios from 'axios';

const callAPI = (endpoint, params) => {
    return axios({
        method: 'GET',
        baseURL: `https://api.github.com/${endpoint}`,
        headers: {
            'Authorization': 'token e9cf0193b34962d5f6c7486c20989856ce12e2ff',
        },
        params
    }).catch(err => {
        console.log(err);
    });
}

export default callAPI;