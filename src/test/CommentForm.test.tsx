import { vi } from "vitest";
import CommentForm from "../components/CommentForm/CommentForm";
import { fireEvent, render } from "./utils";

describe("comment form test cases", () => {
  it("it has a disabled button until both comment textbox and author input field have a value", () => {
    //Arrange
    const comment = "looking just like a wow";
    const author = "insta user";
    const setComments = vi.fn();
    const props = {
      setComments,
    };

    //Act
    const { getByPlaceholderText, getByLabelText, getByText } = render(
      <CommentForm {...props} />
    );

    //Assert
    const submitButton = getByText("Add Comment");

    //initially button is disabled
    expect(submitButton.closest("button")).toBeDisabled();

    //add comment to field
    const commentInputNode = getByPlaceholderText("Write something...");

    fireEvent.change(commentInputNode, { target: { value: comment } });

    expect(submitButton.closest("button")).toBeDisabled();

    const authorInputNode = getByLabelText("Your Name");

    fireEvent.change(authorInputNode, { target: { value: author } });

    expect(submitButton.closest("button")).not.toBeDisabled();

    fireEvent.submit(submitButton);

    expect(setComments).toHaveBeenCalled();
  });
});
