// src/components/Countdown.test.tsx

import { render, screen } from "@testing-library/react";
import { act } from "react";
import Countdown from "./Countdown";

describe("Countdown", () => {
	beforeEach(() => {
		jest.useFakeTimers().setSystemTime(new Date("2026-07-26T12:00:00Z"));
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it("renders the time remaining until the 18th birthday", () => {
		const birthDate = new Date("2008-07-27T12:00:00Z");
		render(<Countdown birthDate={birthDate} />);

		expect(screen.getByText(/1\s*days/i)).toBeInTheDocument();
	});

	it("updates every second", () => {
		const birthDate = new Date("2008-07-27T12:00:00Z");
		render(<Countdown birthDate={birthDate} />);

		expect(screen.getByText(/1\s*days/i)).toBeInTheDocument();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		expect(screen.getByText(/23\s*hours/i)).toBeInTheDocument();
		expect(screen.getByText(/59\s*minutes/i)).toBeInTheDocument();
		expect(screen.getByText(/59\s*seconds/i)).toBeInTheDocument();
	});
});
