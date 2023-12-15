import CommentType from "../../types/Comment.type";
import CommentCard from "../CommentCard/CommentCard";

type CommentListType = {
  comments: CommentType[];
};
const CommentList = ({ comments }: CommentListType) => {
  console.log("comments from CommentList",comments);
  return (
    <div>
      {comments.length >= 0 && comments.map((item, index) => (
        <CommentCard author={item.author} comment={item.comment} key={index} />
      ))}
    </div>
  );
};

export default CommentList;
