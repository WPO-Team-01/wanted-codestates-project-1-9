import styles from "./View.module.scss";
import reviewStyles from "../pages/ReviewDetail/ReviewDetail.module.scss";
import grid from "../images/tab_icon.png";
import list from "../images/tab_icon_2.png";
import { useState, useEffect } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { initialData } from "../redux/data";
import ReviewContent from "./ReviewDetail/ReviewContent";
import Comments from "./Comments/Comments";
import { Link } from 'react-router-dom';


function View({ list }) {
  const [isGrid, setIsGrid] = useState(true);
  const [state, setState] = useState({ itemCount: 15, isLoading: false });


  const fetchItems = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    setState((prev) => ({

      itemCount: prev.itemCount + 3,
      isLoading: false,
    }));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [_, setRef] = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    await fetchItems();
    observer.observe(entry.target);
  }, {});

  const { itemCount, isLoading } = state;
  if (!itemCount) return null;

  return (
    <div id={styles.view_container}>

      <div className={styles.content_grid}>
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
          <>
            {initialData.slice(0, itemCount).map((elem, index) => (
              <div key={index}>
                <Link to = {`/${elem.id}`}>
                <img
                  src={elem.thumbnail}
                  style={{ height: "165px", width: "165px" }}
                />
                </Link>
              </div>
            ))}
            <div ref={setRef}>{isLoading && "Loading..."}</div>
          </>
        ) : (
          <>
            <div className={styles.content_list}>
              {initialData.slice(0, itemCount).map((elem, index) => (
                <div className={reviewStyles.container} key={elem.id}>
                  <ReviewContent data={elem} />
                  <Comments comments={elem.comment} />
                </div>
              ))}
            </div>
            <div ref={setRef}>{isLoading && "Loading..."}</div>
          </>
        )}
      </div>
    </div>
  );
}
export default View;
