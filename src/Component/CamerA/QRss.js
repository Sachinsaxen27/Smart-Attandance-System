import React, { Component } from 'react'
import { BrowserMultiFormatReader } from '@zxing/library';
import FAtten from './FAtten';

export default class QRss extends Component {
  codeReader = new BrowserMultiFormatReader();

  onScan = (result) => {
    if (result && result.getText()) {
      console.log(result.getText());

      // Stop scanning for QR codes and video stream
      this.codeReader.stopContinuousDecode();
      const videoElement = document.getElementById('video-preview');
      const stream = videoElement.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());

      // Navigate to the new page and pass scan result as URL parameter
      this.props.history.push({
        pathname: '/result',
        search: `?scanResult=${result.getText()}`
      });;
    }
  }
          
  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const videoElement = document.getElementById('video-preview');
        videoElement.srcObject = stream;
        videoElement.play();

        // Start scanning for QR codes
        this.codeReader.decodeFromVideoDevice(undefined, videoElement, this.onScan);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <video id="video-preview"></video>
        <FAtten result={this.result} />
      </div>
    )
  }  
}
