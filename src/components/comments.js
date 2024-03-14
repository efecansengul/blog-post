import styles from "./comments.module.css";
import prisma from "@/lib/db";
async function Comments({ postId }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      author: true,
    },
  });
  const date = new Date().toDateString();
  return (
    <div className={styles.comments}>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className={styles.list}>
            <div>
              <div className={styles.autor}>
                <span>User:</span>
                {comment.author?.name}
              </div>
              <div>
                <span>Date:</span>
                {date}
              </div>
              <p>{comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
