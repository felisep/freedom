import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders countdown content", () => {
	render(<App />);
	expect(screen.getAllByText(/years/i).length).toBeGreaterThanOrEqual(1);
});
