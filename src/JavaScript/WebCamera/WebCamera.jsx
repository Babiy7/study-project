import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../ReactJs/Button/Button';
import Label from '../../ReactJs/Label/Label';
import background from './background.jpeg';

import styles from './WebCamera.module.scss';

const WebCamera = (props) => {
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const video = useRef();
  const picture = useRef();

  async function videoStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      video.current.srcObject = stream;
    } catch (e) {
      console.log(e);
    }
  }
  const takeAPhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.current.width;
    canvas.height = video.current.height;

    if (canvas.getContext) {
      const context = canvas.getContext('2d');

      context.drawImage(video.current, 0, 0, video.current.width, video.current.height);

      const image = canvas.toDataURL('image/png').replace('image/png', 1.0);
      picture.current.src = image;
    }
  };

  return (
    <div className={styles.container}>
      {isOpenCamera ? (
        <>
          <Label large align="center">Take a selfie</Label>
          <div className={styles.videoWrapper}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video ref={video} width="400" height="450" autoPlay />
            <img className={styles.image} src={background} ref={picture} alt="shot" style={{ width: '400px', height: '300px' }} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={takeAPhoto}>Take a photo</Button>
            <Button marginLeft="20px" onClick={() => setIsOpenCamera(false)}>Close camera</Button>
          </div>
        </>
      ) : (
        <div className={styles.buttonWrapper}>
          <Button onClick={() => {
            videoStream();
            setIsOpenCamera(true);
          }}
          >
            Open camera
          </Button>
        </div>
      )}
    </div>
  );
};

WebCamera.propTypes = {};

export default WebCamera;
