import AppRouter from "./routes.tsx/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // Animation duration (ms)
			once: false, // Whether animation should happen only once
			offset: 100, // Offset (in px) from the original trigger point
		});
	}, []);

	return (
		<>
			<AppRouter />
		</>
	);
}

export default App;
