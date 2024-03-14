import Link from "next/link";
import styles from "./blogs.module.css";
import prisma from "@/lib/db";

async function BlogsPage() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });
  //console.log(posts);
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
            <p>Written by: {post.author?.name}</p>
            <p className={styles.content}>{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
