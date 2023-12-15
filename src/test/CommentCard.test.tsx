import CommentCard from "../components/CommentCard/CommentCard";
import { render } from "./utils";

describe("Comment Card test cases", () => {
  it("it renders comment and author", () => {
    // Arrange
    const props = { comment: "comment is test", author: "author name" };

    // Act
    const { getByText } = render(<CommentCard {...props} />);

    //Assert
    const commentNode = getByText(props.comment);
    const authorNode = getByText(`- ${props.author}`);

    expect(commentNode).toBeDefined();
    expect(authorNode).toBeDefined();
  });
});
