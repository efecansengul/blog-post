import Link from "next/link";
import styles from "./header.module.css";
import { getCurrentUser } from "@/lib/session";
import ButtonLogout from "./button-logout";
async function Header() {
  const user = await getCurrentUser();
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        My Blog
      </Link>

      <div className={styles.entry}>
        <Link href="/create-post">Create Post</Link>
        <Link href="/blogs">Blogs</Link>
        {user?.name ? (
          <ButtonLogout />
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </nav>
  );
}
export default Header;
