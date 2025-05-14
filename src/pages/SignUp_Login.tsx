import { useLocation } from "react-router-dom";
import signImage from "/src/assets/images/signup_cover.jpg";

const SignUp_Login = () => {
	const location = useLocation();

	return (
		<div className="w-full">
			<div className="w-full section-sec  flex items-center justify-between gap-10 flex-wrap sm:flex-nowrap">
				<div className="w-full md:flex-1 h-screen">
					{location.pathname == "/sign-up" ? (
						<div data-aos="fade-right" className="w-full">
							<div className="space-y-10">
								<h2 className=""></h2>
							</div>
							<form className="w-full m-auto text-center"></form>
						</div>
					) : (
						<div className=""></div>
					)}
				</div>

				<div className="sm:flex hidden w-full h-full md:flex-1">
					<img data-aos="flip-down" src={signImage} alt="Get started image" className="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	);
};

export default SignUp_Login;
