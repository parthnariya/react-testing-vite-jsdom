import { vitest } from "vitest";
import App from "../App";
import { render, screen } from "./utils";
import CommentForm from "../components/CommentForm/CommentForm";
vitest.mock("../components/CommentForm/CommentForm", () => ({
  CommentForm: vitest.fn(() => {
    <div data-testid="CommentForm" />;
  }),
}));
describe("App test", () => {
  it("render Hello", () => {
    render(<App />);
    // const hello = screen.getByText(/It works and you found me!/i);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});
