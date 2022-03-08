import styles from "./View.module.scss";
import grid from "../images/tab_icon.png";
import list from "../images/tab_icon_2.png";
import { useState, useEffect } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const sample = [
  "https://i.balaan.io/review/07d7e9977199370902f384039e3343fa.jpeg",
  "https://i.balaan.io/review/69be653e4cf50caa455dbd249e5d690f.jpeg",
  "https://i.balaan.io/review/5496e00c3e68d1a87707d7075ad0f1c9.jpg",
  "https://i.balaan.io/review/86d5b3f8ecfcbe1900ae232c564a34c0.webp",
  "https://i.balaan.io/review/4066071f34895d65d2f219a24461e5ec.webp",
  "https://i.balaan.io/review/e61dde0dcdba2786d43becef709658c5.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
  "https://i.balaan.io/review/07d7e9977199370902f384039e3343fa.jpeg",
  "https://i.balaan.io/review/69be653e4cf50caa455dbd249e5d690f.jpeg",
  "https://i.balaan.io/review/5496e00c3e68d1a87707d7075ad0f1c9.jpg",
  "https://i.balaan.io/review/86d5b3f8ecfcbe1900ae232c564a34c0.webp",
  "https://i.balaan.io/review/4066071f34895d65d2f219a24461e5ec.webp",
  "https://i.balaan.io/review/e61dde0dcdba2786d43becef709658c5.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
  "https://i.balaan.io/review/07d7e9977199370902f384039e3343fa.jpeg",
  "https://i.balaan.io/review/69be653e4cf50caa455dbd249e5d690f.jpeg",
  "https://i.balaan.io/review/5496e00c3e68d1a87707d7075ad0f1c9.jpg",
  "https://i.balaan.io/review/86d5b3f8ecfcbe1900ae232c564a34c0.webp",
  "https://i.balaan.io/review/4066071f34895d65d2f219a24461e5ec.webp",
  "https://i.balaan.io/review/e61dde0dcdba2786d43becef709658c5.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
  "https://i.balaan.io/review/07d7e9977199370902f384039e3343fa.jpeg",
  "https://i.balaan.io/review/69be653e4cf50caa455dbd249e5d690f.jpeg",
  "https://i.balaan.io/review/5496e00c3e68d1a87707d7075ad0f1c9.jpg",
  "https://i.balaan.io/review/86d5b3f8ecfcbe1900ae232c564a34c0.webp",
  "https://i.balaan.io/review/4066071f34895d65d2f219a24461e5ec.webp",
  "https://i.balaan.io/review/e61dde0dcdba2786d43becef709658c5.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
  "https://i.balaan.io/review/07d7e9977199370902f384039e3343fa.jpeg",
  "https://i.balaan.io/review/69be653e4cf50caa455dbd249e5d690f.jpeg",
  "https://i.balaan.io/review/5496e00c3e68d1a87707d7075ad0f1c9.jpg",
  "https://i.balaan.io/review/86d5b3f8ecfcbe1900ae232c564a34c0.webp",
  "https://i.balaan.io/review/4066071f34895d65d2f219a24461e5ec.webp",
  "https://i.balaan.io/review/e61dde0dcdba2786d43becef709658c5.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
  "https://i.balaan.io/review/07d7e9977199370902f384039e3343fa.jpeg",
  "https://i.balaan.io/review/69be653e4cf50caa455dbd249e5d690f.jpeg",
  "https://i.balaan.io/review/5496e00c3e68d1a87707d7075ad0f1c9.jpg",
  "https://i.balaan.io/review/86d5b3f8ecfcbe1900ae232c564a34c0.webp",
  "https://i.balaan.io/review/4066071f34895d65d2f219a24461e5ec.webp",
  "https://i.balaan.io/review/e61dde0dcdba2786d43becef709658c5.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
  "https://i.balaan.io/review/4066071f34895d65d2f219a24461e5ec.webp",
  "https://i.balaan.io/review/e61dde0dcdba2786d43becef709658c5.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
  "https://i.balaan.io/review/05cc3dcd675e40d70b5983f57306a828.webp",
  "https://i.balaan.io/review/2fdac641e834ad82dbf34ee77aeb1e0b.webp",
  "https://i.balaan.io/review/cc206aeffde3398756e1ff43e06ae255.webp",
  "https://i.balaan.io/review/05cc3dcd675e40d70b5983f57306a828.webp",
  "https://i.balaan.io/review/2fdac641e834ad82dbf34ee77aeb1e0b.webp",
  "https://i.balaan.io/review/cc206aeffde3398756e1ff43e06ae255.webp",
  "https://i.balaan.io/review/05cc3dcd675e40d70b5983f57306a828.webp",
  "https://i.balaan.io/review/2fdac641e834ad82dbf34ee77aeb1e0b.webp",
  "https://i.balaan.io/review/cc206aeffde3398756e1ff43e06ae255.webp",
  "https://i.balaan.io/review/05cc3dcd675e40d70b5983f57306a828.webp",
  "https://i.balaan.io/review/2fdac641e834ad82dbf34ee77aeb1e0b.webp",
  "https://i.balaan.io/review/cc206aeffde3398756e1ff43e06ae255.webp",
  "https://i.balaan.io/review/cbc5d708065edcac27bdc164b52f13f7-t_300.webp",
];

const fakeFetch = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay));

function View() {
  const [isGrid, setIsGrid] = useState(true);
  const [state, setState] = useState({ itemCount: 15, isLoading: false });

  /* fake async fetch */
  const fetchItems = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    // await fakeFetch();
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
        <div className={styles.content_grid}>
          {(sample.slice(0, itemCount)).map((elem, index) => (
            <img
              key={index}
              src={elem}
              style={{ height: "12vh", width: "12vw" }}
            ></img>
          ))}
          <div ref={setRef} className="Loading">
            {isLoading && "Loading..."}
          </div>
        </div>
      ) : (
        <div className={styles.content_list}>list</div>
      )}
    </div>
  );
}
export default View;
