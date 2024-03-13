import styles from "./blog-detail-page.module.css";
import Comments from "@/components/comments";
import FormComments from "@/components/form-comments";
async function BlogDetailPage({ params }) {
  return (
    <div className={styles.postWrapper}>
      <h2 className={styles.title}>title</h2>
      <p className={styles.author}>
        <span>Written by:</span>
        efecansengul
      </p>
      <p className={styles.content}>askdljflşkasdklfjlşskajdfşlkjsaşldk</p>
      <Comments postId={params.id} />
      <FormComments postId={params.id} />
    </div>
  );
}
export default BlogDetailPage;
