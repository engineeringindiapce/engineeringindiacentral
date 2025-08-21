import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders ABHYUDAYA title", () => {
    render(<App />);
    const titleElement = screen.getByText(/ABHYUDAYA/i);
    expect(titleElement).toBeInTheDocument();
  });
});
