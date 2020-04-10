import axios from 'axios';
import { config } from '../config';
const url = config.model_url;

export default class MaxTransferService {

    getStyledimage = async (image, style) => {
        return new Promise(async (resolve, reject) => {
            try {
                //let newImg = `data:image/jpeg;base64,${image}`;
                let formData = new FormData();
                formData.set('image', image);
                axios.post(`${url}?model=${style}`, formData, {
                    responseType: 'blob',
                    headers: {
                        'Content-Type': 'multipart/form-data', // do not forget this
                        'accept': 'application/json',
                    }
                }).then((response) => {
                    var reader = new window.FileReader();
                    reader.readAsDataURL(response.data);
                    reader.onload = function() {
                        var imageDataUrl = reader.result;
                        resolve(imageDataUrl);
                    }
                });

            } catch (e) {
                reject(e);
            }
        } );

    }
}