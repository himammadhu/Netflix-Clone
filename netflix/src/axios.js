import axios from 'axios';
import {baseUrl} from './Constants/Constant'

const instance = axios.create({
    baseUrl: baseUrl,

});

export default instance