import "./CommentCard.css";
type CommentCardPropType = {
  comment: string;
  author: string;
};

const CommentCard = ({ comment, author }: CommentCardPropType) => (
  <div className="card">
    <p>{comment}</p>
    <p className="authorTag">- {author}</p>
  </div>
);
export default CommentCard;
