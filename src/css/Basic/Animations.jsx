import React from 'react';
import FlexBox from '../FlexBox/FlexBox';
import Label from '../../ReactJs/Label/Label';

import styles from './Animations.module.scss';

const Animations = () => (
  <div>
    <Label large>Animations</Label>
    <FlexBox>
      <div className={styles.boxRotate}>
        <Label small>Rotate</Label>
      </div>
      <div className={styles.boxTransform}>
        <Label small>Transform</Label>
      </div>
      <div className={styles.boxAnimation}>
        <Label small>Animation keyframes</Label>
      </div>
    </FlexBox>
  </div>
);

export default Animations;
