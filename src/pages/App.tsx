import "./App.css";
import { useState } from "react";
import Countdown from "../components/Countdown";
import Lived from "../components/Lived";

const LBirthDate = new Date(2014, 4, 13);
const EBirthDate = new Date(2026, 5, 29);
// Set to true to show the Lived component, false to hide it

function App() {
	const [showLived, setShowLived] = useState(true);
	const handleToggle = () => setShowLived(!showLived);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: for testing only
		<div className="App" onClick={handleToggle} onKeyDown={handleToggle}>
			<header className="App-header">
				<div className="countdown">
					L
					{showLived ? (
						<Lived birthDate={LBirthDate} />
					) : (
						<Countdown birthDate={LBirthDate} />
					)}
				</div>
				<div className="countdown">
					E
					{showLived ? (
						<Lived birthDate={EBirthDate} />
					) : (
						<Countdown birthDate={EBirthDate} />
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
