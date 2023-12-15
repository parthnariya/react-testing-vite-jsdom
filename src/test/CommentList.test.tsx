import CommentList from "../components/CommentList/CommentList";
import { render } from "./utils";

describe("Comment list test cases", () => {
  it("render comments list", () => {
    //Arrange
    const comment1 = {
      author: "author1",
      comment: "comment1",
    };

    const comment2 = {
      author: "author2",
      comment: "comment2",
    };

    const props = { comments: [comment1, comment2] };

    //Act
    const { getByText } = render(<CommentList {...props} />);

    //Assert
    const comment1Node = getByText(comment1.comment);
    const author1Node = getByText(`- ${comment1.author}`);
    const comment2Node = getByText(comment2.comment);
    const author2Node = getByText(`- ${comment2.author}`);

    expect(comment1Node).toBeDefined();
    expect(comment2Node).toBeDefined();
    expect(author1Node).toBeDefined();
    expect(author2Node).toBeDefined();
  });
  it("render empty list", () => {
    //Arrange
    const props = { comments: [] };

    //Act
    const { getByText } = render(<CommentList {...props} />);

    //Assert
    const noDataNode = getByText("No Comments");

    expect(noDataNode).toBeInTheDocument();
  });
});
