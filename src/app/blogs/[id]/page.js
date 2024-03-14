import styles from "./blog-detail-page.module.css";
import Comments from "@/components/comments";
import FormComments from "@/components/form-comments";
import prisma from "@/lib/db";
async function BlogDetailPage({ params }) {
  const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className={styles.postWrapper}>
      <h2 className={styles.title}>{post?.title}</h2>
      <p className={styles.author}>
        <span>Written by:</span>
        {post?.author?.name}
      </p>
      <p className={styles.content}>{post?.content}</p>
      <Comments postId={params.id} />
      <FormComments postId={params.id} />
    </div>
  );
}
export default BlogDetailPage;
