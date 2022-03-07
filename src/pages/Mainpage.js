import React from 'react';
import styles from './Mainpage.module.scss';
import Header from '../components/Header';
import View from '../components/View';

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.tab_menu}>
        <div className={styles.tag}>최신순</div>
        <div className={styles.tag}>리뷰카운트순</div>
        <div className={styles.tag}>랜덤</div>
      </div>
      <div id={styles.view_container}>
        <View />
      </div>
    </div>
  );
}

export default MainPage;
