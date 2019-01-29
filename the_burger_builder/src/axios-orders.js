import axios from 'axios';

const instance = axios.create( {
    baseURL: 'https://react-my-burger-eac51.firebaseio.com/'
});

export default instance;