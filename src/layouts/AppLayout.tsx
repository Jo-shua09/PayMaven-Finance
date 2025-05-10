import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
	const location = useLocation();

	return (
		<div className="w-full max-w-[170rem] mx-auto">
			<header>
				<Navbar />
			</header>
			<div className="w-full max-w-[140rem] mx-auto">
				<main>
					<Outlet />
				</main>
				<footer className={`${location.pathname != "/" ? "hidden" : "block"}`}>
					<Footer />
				</footer>
			</div>
		</div>
	);
};

export default AppLayout;
