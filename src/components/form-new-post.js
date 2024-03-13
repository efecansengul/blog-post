"use client"; // ReactTextareaAutosize only useclient
import ReactTextareaAutosize from "react-textarea-autosize";
import styles from "./form-new-post.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";

function FormNewPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  //kullanıcı bilgisi
  const { data } = useSession();
  let user = <p>Welcome user.Please Login</p>;
  if (data?.user) {
    user = <p>Welcome {data.user.name}</p>;
  }
  function handleChange(event) {
    setError(false);
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {user}
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <ReactTextareaAutosize
            minRows={5}
            value={formData.content}
            name="content"
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter the Content"
            required
          />
        </div>

        <button className={styles.button}>Submit</button>
        {error && <p>Hata olustu tekrar gönderin</p>}
      </form>
    </>
  );
}

export default FormNewPost;
