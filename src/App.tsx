import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import "./App.css";
import ListPosts from "./components/ListPosts";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  function showModalHandler() {
    setModalVisibility(true);
  }
  function hideModalHandler() {
    setModalVisibility(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <ListPosts
          modalVisibility={modalVisibility}
          hideModalHandler={hideModalHandler}
        ></ListPosts>
      </main>

      <footer>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </>
  );
}

export default App;
