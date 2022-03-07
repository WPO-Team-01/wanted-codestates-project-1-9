import styles from './View.module.scss';
import grid from '../images/tab_icon.png';
import list from '../images/tab_icon_2.png';
import { useState } from 'react';

function View() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div id={styles.view_container}>
      {/*사진 정렬 type고르는 부분 */}
      <section className={styles.type_selector_container}>
        <div
          id={isGrid ? styles.grid_selected : styles.grid}
          onClick={() => {
            setIsGrid(true);
          }}
        >
          <img src={grid} />
        </div>
        <div
          id={isGrid ? styles.list : styles.list_selected}
          onClick={() => {
            setIsGrid(false);
          }}
        >
          <img src={list} />
        </div>
      </section>
      {/*리뷰 보여지는 부분 */}
      {isGrid ? (
        <div className={styles.content_grid}>grid</div>
      ) : (
        <div className={styles.content_list}>list</div>
      )}
    </div>
  );
}
export default View;
