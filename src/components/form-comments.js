"use client";
import styles from "./form-comments.module.css";
import { useState } from "react";
function FormComments({ postId }) {
  const [comment, setComment] = useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(comment);
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
        <button className={styles.button} onClick={handleSubmit}>
          Submit Comment
        </button>
      </div>
    </div>
  );
}
export default FormComments;
