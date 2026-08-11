import { intervalToDuration } from "date-fns/intervalToDuration";
import { useEffect, useState } from "react";

const Lived = ({ birthDate }: { birthDate: Date }) => {
	const targetDate = new Date(birthDate);
	targetDate.setFullYear(targetDate.getFullYear());

	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const duration = intervalToDuration({
		start: targetDate,
		end: now,
	});

	return (
		<div>
			{duration.years} years {duration.months} months {duration.days} days{" "}
			{duration.hours} hours {duration.minutes} minutes <b>since birth</b>
		</div>
	);
};

export default Lived;
