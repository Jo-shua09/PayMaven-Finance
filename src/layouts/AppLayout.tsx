import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
	const location = useLocation();

	return (
		<>
			<div className="w-full max-w-screen-2xl mx-auto">
				<Navbar />
				<div className="w-full">
					<Outlet />
					<footer className={`${location.pathname !== "/" ? "hidden" : "block"}`}>
						<Footer />
					</footer>
				</div>
			</div>
		</>
	);
};
export default AppLayout;
