import axios from 'axios';

const callAPI = (endpoint, params) => {
    return axios({
        method: 'GET',
        baseURL: `https://api.github.com/${endpoint}`,
        headers: {
            'Authorization': 'token 04c18a127cbcc5492dda15761cb493e1ce97aa82',
        },
        params
    }).catch(err => {
        console.log(err);
    });
}

export default callAPI;