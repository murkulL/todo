import React from 'react';
import styles from './MyButton.module.scss';

function MyButton({children, ...props}) {
  return (
    <button {...props} className={styles.myBtn}>
    {children}
    </button>
  );
};

export default MyButton;
