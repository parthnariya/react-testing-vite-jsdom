import App from "../App";
import { render, screen } from "./utils";
describe("App test", () => {
  it("render Hello", () => {
    render(<App />);
    // const hello = screen.getByText(/It works and you found me!/i);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});
