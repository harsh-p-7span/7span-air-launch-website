import CountdownVideo from "./assets/countdown_video.mp4";
import LaunchButton from "./assets/launch_button.webp";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [showLaunchButton, setShowLaunchButton] = useState(true);

	useEffect(() => {
		let timer = 0;

		if (!showLaunchButton) {
			timer = setTimeout(() => {
				window.location.href =
					"https://sites.google.com/7span.com/air/home";
			}, 8000);
		}

		return () => clearTimeout(timer);
	}, [showLaunchButton]);

	if (showLaunchButton) {
		return (
			<div className="container">
				<img
					src={LaunchButton}
					alt="Launch button"
					onClick={() => setShowLaunchButton(false)}
				/>

				<footer>Made with ❤️ by Harrsh Patel</footer>
			</div>
		);
	}

	return (
		<div className="video-container">
			<video className="fullscreen-video" autoPlay={true}>
				<source src={CountdownVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default App;
