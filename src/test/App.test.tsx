import { vitest } from "vitest";
import App from "../App";
import { fireEvent, render, screen } from "./utils";
import CommentForm from "../components/CommentForm/CommentForm";

// vitest.mock("../components/CommentForm/CommentForm", () => ({
//   default: () => <div data-testid="CommentForm" />,
// }));

describe("App test", () => {
  it("render Hello", () => {
    render(<App />);
    // const hello = screen.getByText(/It works and you found me!/i);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
  // it("render Comment form", () => {
  //   const setComments = vitest.fn();
  //   const props = {
  //     setComments,
  //   };
  //   render(<CommentForm {...props} />);
  //   expect(screen.queryByTestId("CommentForm")).toBeInTheDocument();
  // });
  it("render Comment form with setComment function", () => {
    //Arrange
    const comment = "Hello this is comment";
    const author = "jogi";
    //Act
    render(<App />);

    const commentInputArea = screen.getByPlaceholderText("Write something...");
    const authorInputField = screen.getByLabelText("Your Name");
    const submitButton = screen.getByRole("button", { name: "Add Comment" });
    const noDataField = screen.getByText("No Comments");
    
    expect(submitButton).toBeDisabled();
    expect(noDataField).toBeInTheDocument();
    
    fireEvent.change(commentInputArea, { target: { value: comment } });
    
    expect(submitButton).toBeDisabled();
    expect(noDataField).toBeInTheDocument();
    
    fireEvent.change(authorInputField, { target: { value: author } });
    
    expect(submitButton).toBeEnabled();
    expect(noDataField).toBeInTheDocument();
    
    fireEvent.click(submitButton);
    
    const commentNode = screen.getByText(comment);
    const authorNode = screen.getByText(`- ${author}`);
    
    expect(noDataField).not.toBeInTheDocument();
    expect(authorNode).toBeInTheDocument();
    expect(commentNode).toBeInTheDocument();
    //Assert
  });
});
