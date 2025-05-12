import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
	const location = useLocation();

	return (
		<>
			<div className={`max-w-[180rem] w-full`}>
				<Navbar />
				<div className="max-w-[150rem] w-full">
					<Outlet />
					<footer className={`${location.pathname != "/" ? "hidden" : "block"}`}>
						<Footer />
					</footer>
				</div>
			</div>
		</>
	);
};

export default AppLayout;
