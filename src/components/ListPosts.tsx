import Post from "./Post";
import styles from "./ListPosts.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
import React from "react";
interface Props {
  modalVisibility: boolean;
  hideModalHandler: () => void;
}
function ListPosts({ modalVisibility, hideModalHandler }: Props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event: React.ChangeEvent) {
    setEnteredBody((event.target as HTMLInputElement).value);
  }
  function changeAuthorHandler(event: React.ChangeEvent) {
    setEnteredAuthor((event.target as HTMLInputElement).value);
  }

  return (
    <>
      {modalVisibility && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onAuthorChange={changeAuthorHandler}
            onBodyChange={changeBodyHandler}
          ></NewPost>
        </Modal>
      )}

      <ul className={styles.ul}>
        <Post author={enteredAuthor} body={enteredBody}></Post>
        <Post author="Jerry" body="Check out the full course!"></Post>
      </ul>
    </>
  );
}
export default ListPosts;
