import AppRouter from "./routes.tsx/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // Animation duration (ms)
			once: true, // Whether animation should happen only once
			offset: 100, // Offset (in px) from the original trigger point
		});
	}, []);

	return (
		<>
			<AppRouter />
			<ToastContainer position="top-right" autoClose={2000} toastClassName="text-2xl font-medium" />
		</>
	);
}

export default App;
