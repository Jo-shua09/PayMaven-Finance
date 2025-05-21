import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LandingPage from "../pages/LandingPage";
import SignUp_Login from "../pages/SignUp_Login";
import ScrollToTop from "../components/ScrollToTop";
import ActivateAccount from "../pages/ActivateAccount";
import ActivateAccountSuccess from "../sections/activateAccount/ActivateAccountSuccess";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<SignUp_Login />} />
					<Route path="/sign-up" element={<SignUp_Login />} />
					<Route path="/activate-account" element={<ActivateAccount />} />
					<Route path="/account-activated" element={<ActivateAccountSuccess />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
