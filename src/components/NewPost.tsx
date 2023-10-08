// import { ChangeEvent } from "react";
import React from "react";
import styles from "./NewPost.module.css";
interface Props {
  onAuthorChange: (event: React.ChangeEvent) => void;
  onBodyChange: (event: React.ChangeEvent) => void;
}
function NewPost({ onAuthorChange, onBodyChange }: Props) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="body">Your name</label>
        <textarea id="name" required rows={3} onChange={onAuthorChange} />
      </p>
    </form>
  );
}
export default NewPost;
