import React from 'react';
import styles from './Mainpage.module.scss';
import Header from '../components/Header';
import View from '../components/View';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function MainPage() {
  const data = useSelector(state => state.contents.data);

  const [filter, setFilter] = useState('latest');
  const [list, setList] = useState(data);

  const handleChangeFilter = f => {
    setFilter(f);
    if (filter === 'latest') setList(data);
    else if (filter === 'review') {
      let slice = data.slice();
      slice.sort((a, b) => {
        //comment가 없으면 value가 undefined
        let aLength = 0;
        let bLength = 0;
        if (a.comment) aLength = a.comment.length;
        if (b.comment) bLength = b.comment.length;
        // console.log(aLength, bLength);
        return bLength - aLength;
      });
      setList(slice);
    } else if (filter === 'random') {
      let slice2 = data.slice();
      slice2.sort(() => Math.random() - 0.5);
      setList(slice2);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.tab_menu}>
        <div
          className={styles.tag}
          onClick={() => handleChangeFilter('latest')}
        >
          최신순
        </div>
        <div
          className={styles.tag}
          onClick={() => handleChangeFilter('review')}
        >
          리뷰카운트순
        </div>
        <div
          className={styles.tag}
          onClick={() => handleChangeFilter('random')}
        >
          랜덤
        </div>
      </div>
      <div id={styles.view_container}>
        <View list={list} />
      </div>
    </div>
  );
}

export default MainPage;
