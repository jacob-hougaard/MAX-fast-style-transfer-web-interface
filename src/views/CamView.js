import React from 'react'
import WebcamComponent from "../components/webcam/WebcamComponent";
import MaxTransferService from '../service/MaxTransferService';
import './camViewStyles.css';
import ClockLoader from "react-spinners/ClipLoader";
import LoadingOverlay from 'react-loading-overlay';

const styles= {
    gridStyle:{
        backgroundColor:"#282c34"
    },
    buttonStyle:{
        width:"100%"
    },
    cardStyle:{
        backgroundColor:"#282c34",
        height:"100%"
    },
    webcamStyle:{
        margin:"auto",
        display:"block"
    },
    previewStyle:{
        maxWidth:"70%",
        marginTop:"4px"
    },
}

export default class CamView extends React.Component {

    constructor(props){
        super(props);
        this.webcam = React.createRef();
        this.service = new MaxTransferService();

        this.state = {
            styleImg:null,
            isLoadingImage: false,
        }
    }

    postGetStyledImage = async (e) => {
        let style = e.target.id;
        let imgVal = await this.webcam.current.screenshotImage();
        let screenShotBlob = this.dataURLtoBlob(imgVal)
        this.setState({
            isLoadingImage: true,
            styleImg: imgVal
        })
        let styledImg = await this.service.getStyledimage(screenShotBlob, style);
        this.setState({
            styleImg:styledImg,
            isLoadingImage: false
        })
    }

    // Jep. This is for parsing the webcam data.
    dataURLtoBlob = (dataurl) => {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    }

    renderPreviewImages = () => {
        return (
            <div className="imagePreviewContainer">
                <img id={"candy"} className={"imagePreview"} src={process.env.PUBLIC_URL + '/candy.jpg'} onClick={this.postGetStyledImage}></img>
                <img id={"mosaic"} className={"imagePreview"}  src={process.env.PUBLIC_URL + '/mosaic.jpg'} onClick={this.postGetStyledImage}></img>
                <img id={"rain_princess"} className={"imagePreview"}  src={process.env.PUBLIC_URL + '/rain-princess-cropped.jpg'} onClick={this.postGetStyledImage}></img>
                <img id={"udnie"} className={"imagePreview"}  src={process.env.PUBLIC_URL + '/udnie.jpg'}  onClick={this.postGetStyledImage}></img>
            </div>
        )
    }


    render() {
        return(
            <div>
                <div className="bx--grid" style={styles.gridStyle}>
                    <div className="bx--row">
                        <div className="bx--col-lg-7">
                            <div style={styles.cardStyle}>
                                <WebcamComponent style={styles.webcamStyle} ref={this.webcam}/>
                            </div>
                        </div>
                        <div className="bx--col-lg-2" style={styles.previewStyle}>
                            {this.renderPreviewImages()}
                        </div>
                        <div className="bx--col-lg-7">
                                <div style={styles.cardStyle}>
                                    <LoadingOverlay
                                        active={this.state.isLoadingImage}
                                        spinner={<div><br/> <ClockLoader loading={"true"} color={"#0043ce"}/></div>}
                                        text='Your image is being created'
                                    >
                                        {this.state.styleImg ? <img alt={""} src={this.state.styleImg ? this.state.styleImg : ""}/> : ""}
                                    </LoadingOverlay>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
