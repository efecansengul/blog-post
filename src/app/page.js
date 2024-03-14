import styles from "./page.module.css";
import Cart from "@/components/cart";
export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,auto)",
        alignContent: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Cart>
        <span className={styles.text} style={{ textAlign: "center" }}>
          First full stack app
        </span>
      </Cart>
    </main>
  );
}
