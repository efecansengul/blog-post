import Link from "next/link";
import styles from "./header.module.css";

async function Header() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        My Blog
      </Link>

      <div className={styles.entry}>
        <Link href="/create-post">Create Post</Link>
        <Link href="/blogs">Blogs</Link>

        <Link href="/api/auth/signin">Login</Link>
      </div>
    </nav>
  );
}
export default Header;
