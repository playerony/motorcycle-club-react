import fetch from 'cross-fetch';

const apiUrl = 'https://gentle-everglades-57912.herokuapp.com/email-sender';

export function sendEmail(data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AppAuthHeader': 'MOTORCYCLE-CLUB-API-AUTH-HEADER'
        },
        body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            message: data.message,
        })
    };
        
    return fetch(apiUrl, requestOptions)
        .then(response => {
            return response.json()
        });
}