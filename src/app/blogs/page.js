import Link from "next/link";
import styles from "./blogs.module.css";
const posts = [
  {
    id: 1,
    title: "blog1",
    author: "efecan sengul",
    content: "this is first blog",
  },
  {
    id: 2,
    title: "blog2",
    author: "sengulefecan sengul",
    content: "this is first blog",
  },
];

async function BlogsPage() {
  return (
    <div className={styles.blogs}>
      <h1 className={styles.title}>Blogs</h1>
      <div className={styles.blog}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`blogs/${post.id}`}
            className={styles.blogCart}
          >
            <h2>{post.title}</h2>
            <p>Written by: {post.author}</p>
            <p className={styles.content}>{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
