import "./App.css";
import Countdown from "../components/Countdown";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="countdown">
					L<Countdown birthDate={new Date(2014, 4, 13)} />
				</div>
				<div className="countdown">
					E<Countdown birthDate={new Date(2026, 5, 29)} />
				</div>
			</header>
		</div>
	);
}

export default App;
