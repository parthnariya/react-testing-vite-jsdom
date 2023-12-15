import { useState } from "react";
import "./App.css";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";
import CommentType from "./types/Comment.type";

function App() {
  const [comments, setComments] = useState<CommentType[]>([]);
  console.log({ comments });
  return (
    <div className="app">
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
