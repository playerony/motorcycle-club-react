import fetch from 'cross-fetch';

const apiUrl = 'https://tranquil-cove-10757.herokuapp.com/api';
const baseFolderPath = '/motorcycle-club'

export function readdir(path) {
    return fetchDropBoxApi('/readdir', path);
}

export function readFile(path) {
    return fetchDropBoxApi('/readFile', path);
}

function fetchDropBoxApi(endpoint, path) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AppAuthHeader': 'MOTORCYCLE-CLUB-API-AUTH-HEADER'
        },
        body: JSON.stringify({
            path: baseFolderPath + path
        })
    };
        
    return fetch(apiUrl + endpoint, requestOptions)
        .then(response => {
            return response.json()
        });
}