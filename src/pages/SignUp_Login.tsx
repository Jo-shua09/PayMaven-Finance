import { useLocation } from "react-router-dom";

const SignUp_Login = () => {
	const location = useLocation();

	return (
		<div className="w-full">
			<div className="w-full section-sec flex items-center justify-between gap-10 flex-wrap sm:flex-nowrap">
				<div className="">
					{location.pathname == "/sign-up" ? (
						<div data-aos="fade-right" className="w-full">
							<div className="space-y-10">hello</div>
							<form className="w-full m-auto text-center"></form>
						</div>
					) : (
						<div className=""></div>
					)}
				</div>

				<div className="sm:flex hidden w-full h-full">
					<img src="" alt="Get started image" className="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	);
};

export default SignUp_Login;
