"use client";
import { useRouter } from "next/navigation";
import styles from "./form-comments.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
function FormComments({ postId }) {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { data } = useSession();
  function handleChange(event) {
    setComment(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (comment.trim() !== "") {
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId, text: comment }),
        });
        router.refresh();
        setComment("");
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <div className={styles.comment}>
      <label htmlFor="comment">Write comment: </label>
      <input
        type="text"
        value={comment}
        name="comment"
        className={styles.int}
        onChange={handleChange}
      />
      <div className={styles.buttonDiv}>
        <button
          className={styles.button}
          onClick={handleSubmit}
          style={{ pointerEvents: data?.user?.email ? "auto" : "none" }}
          disabled={!data?.user?.email}
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
}
export default FormComments;
