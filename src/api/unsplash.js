import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID 84169b28c2e01a8f77b0a8c501cebfce6d91c93ffa7327d538cf6c7b207462ba'
    }
});