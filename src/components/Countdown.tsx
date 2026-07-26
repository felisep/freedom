import { intervalToDuration } from "date-fns/intervalToDuration";
import { useEffect, useState } from "react";

type CountdownProps = {
  birthDate: Date;
};

export default function Countdown({ birthDate }: CountdownProps) {
  const targetDate = new Date(birthDate);
  targetDate.setFullYear(targetDate.getFullYear() + 18);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const duration = intervalToDuration({
    start: now,
    end: targetDate,
  });

  return (
    <div>
      {duration.years} years{" "}
      {duration.months} months{" "}
      {duration.days} days{" "}
      {duration.hours} hours{" "}
      {duration.minutes} minutes{" "}
      {duration.seconds} seconds
    </div>
  );
}