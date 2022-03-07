import styles from './Header.module.scss';
import logo from '../images/ico_logo.png';
import nav from '../images/nav.png';
import glasses from '../images/glasses.png';
import heart from '../images/heart.png';
import shoppingBag from '../images/shopping_bag.png';
function Header() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <img src={nav} id={styles.nav} />
        <img src={glasses} id={styles.glasses} />
      </section>
      <img src={logo} id={styles.logo} />
      <section className={styles.right}>
        <img src={heart} id={styles.heart} />
        <img src={shoppingBag} id={styles.shoppingBag} />
      </section>
    </div>
  );
}
export default Header;
