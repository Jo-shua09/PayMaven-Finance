import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LandingPage from "../pages/LandingPage";
import SignUp_Login from "../pages/SignUp_Login";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<SignUp_Login />} />
					<Route path="/sign-up" element={<SignUp_Login />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
