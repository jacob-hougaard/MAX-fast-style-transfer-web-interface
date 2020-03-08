import React from 'react'
import Webcam from 'react-webcam';

export default class WebcamComponent extends React.Component {

    setRef = webcam => {
        this.webcam = webcam;
    };

    screenshotImage = () => {
        let screenShot = this.webcam.getScreenshot();
        return screenShot
    };

    render() {
        return (
            <div>
                <Webcam audio={false} style={{width:"100%"}} ref={this.setRef} screenshotFormat="image/jpeg"/>
            </div>
        );
    }
}
