import AppRouter from "./routes.tsx/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			offset: 100,
		});
	}, []);

	return (
		<>
			<AppRouter />
			<ToastContainer
				position="top-right"
				pauseOnHover={false}
				autoClose={2000}
				toastClassName="text-2xl normal-case font-medium"
			/>
		</>
	);
}

export default App;
