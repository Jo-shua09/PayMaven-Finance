import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LandingPage from "../pages/LandingPage";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<LandingPage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
