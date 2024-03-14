import styles from "./cart.module.css";
function Cart({ children }) {
  return (
    <div className={styles.flipCart}>
      <div className={styles.frontSide}>Blog Post</div>
      <div className={styles.backSide}>{children}</div>
    </div>
  );
}
export default Cart;
