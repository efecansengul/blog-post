import styles from "./comments.module.css";
const comments = [
  {
    id: 1,
    author: {
      name: "efecan",
    },
    text: "eaksfdjkfjlskşajdfklsadf",
  },
];
const date = new Date().toString();
async function Comments({ postId }) {
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
