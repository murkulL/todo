import React from 'react'
import styles from './MyModal.module.scss';


function MyModal({children, checkModal, setCheckModal}) {

  const rootClasses = [styles.MyModal]
  if(checkModal){
    rootClasses.push(styles.active)
  }

  return (
    <div className={rootClasses.join(' ')}>
        <div className={styles.MyModalContent}>
          {children}
        </div>
        <button className={styles.myButton} onClick={() =>  setCheckModal(true)}>Close</button>
    </div>
  );
};

export default MyModal;
