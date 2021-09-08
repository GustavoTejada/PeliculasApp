import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '77d4bdd91e70e1c691bc265726ebb489',
        language: 'es-ES'
    }
});

export default movieDB;