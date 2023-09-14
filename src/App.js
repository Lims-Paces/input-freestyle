import React, { useState } from "react";

export default function App(props) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [work, setWork] = useState("");
  const [post, setPost] = useState([]);

  const onShow = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  const changeHandler = (e) => {
    setMessage(e.target.value);
    // console.log(message)
  };
  const changeWorkHandler = (e) => {
    setWork(e.target.value);
    // console.log(work)
  };
  const addPost = (postData) => {
    setPost((existingPost) => [postData, ...existingPost]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const post = { name: message, work: work };
    console.log(post);
    addPost(post);
    onClose();
  };

  // console.log(post)

  return (
    <div className="App">
      <button onClick={onShow}>Open Me</button>
      {show && (
        <div>
          <p>Hello there</p>
          <form onSubmit={submitHandler}>
            <div>
              <p>What is your name</p>
              <input type="text" onChange={changeHandler} />
              <p>What do you do</p>
              <input type="text" onChange={changeWorkHandler} />
            </div>
            <button type="button" onClick={onClose}>
              cancel
            </button>{" "}
            <button>submit</button>
          </form>
        </div>
      )}
      <div>
        {post.map((m, i) => (
          <div index={i}>
            <p>Name: {m.name} </p>
            <p>Occupation: {m.work} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
