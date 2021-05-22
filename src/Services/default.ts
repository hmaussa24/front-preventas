import axios from "axios";
import {URL} from '../Constans/Constans'
 export default axios.create( {
    baseURL: URL.baseURl
});
