import axios from 'axios';
const url = "http://max-fast-neural-style-transfer.max.us-south.containers.appdomain.cloud/model/predict";
//const url = "http://localhost:3001/users";

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
                console.log("Errorororo");
                console.log(e);
                reject(e);
            }
        } );

    }
}