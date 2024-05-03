import * as React from 'react';
import styles from './Context.module.scss';

export function Context(props) {
  return (
    <div className={styles.main}>
      <div className={styles.div1}>
        <h3 className={styles.textDiv1}>
          div 1
          <div>z-index: 5</div>
        </h3>
      </div>
      <div className={styles.div2}>
        <h3 className={styles.textDiv2}>
          div 2
          <div>z-index: 2</div>
        </h3>
      </div>
      <div className={styles.div3}>
        <h3 className={styles.textDiv3}>
          div 3
          <div>z-index: 3</div>
        </h3>
        <div className={styles.div4}>
          <h3 className={styles.textDiv4}>
            div 4
            <div>z-index: 6</div>
          </h3>
        </div>
        <div className={styles.div5}>
          <h3 className={styles.textDiv5}>
            div 5
            <div>z-index: 1</div>
          </h3>
        </div>
        <div className={styles.div6}>
          <h3 className={styles.textDiv6}>
            div 6
            <div>z-index: 3</div>
          </h3>
        </div>
      </div>
      <div className={styles.description}>
        <ul>
          <li>div 1</li>
          <li>div 2</li>
          <li>
            div 3
            <ul>
              <li>div 4</li>
              <li>div 5</li>
              <li>div 6</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
