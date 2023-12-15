import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import CommentType from "../../types/Comment.type";
import "./CommentForm.css";
type CommentFormPropType = {
  setComments: Dispatch<SetStateAction<CommentType[]>>;
};
const CommentForm = ({ setComments }: CommentFormPropType) => {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const isFieldsAreValid = () => author.length > 0 && comment.length > 0;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ author, comment });
    if (isFieldsAreValid())
      setComments((prev) => [
        ...prev,
        {
          author,
          comment,
        },
      ]);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <textarea
          className={"commentBox"}
          placeholder="Write something..."
          name="comment"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author" aria-labelledby="author">
          Your Name
        </label>
        <input
          id="author"
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!isFieldsAreValid()}>
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
