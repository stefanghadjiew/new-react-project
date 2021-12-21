import axios from 'axios';
import { accessKey, baseUrl } from './apiConstants';


export const getPhotos = async () => {
    const options = createOptions('GET');
    try {
        const response = await axios.request(options);
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

const createOptions = (method) => {
    const options = {
        method,
        url: baseUrl ,
        headers : {
            "Authorization" : `Client-ID ${accessKey}`
        }
    }
    return options;
}





