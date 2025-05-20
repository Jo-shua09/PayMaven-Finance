import { useEffect, useState } from "react";
import ActivateAccountHeader from "../../layouts/ActivateAccountHeader";
import auth from "/src/assets/images/auth.png";
import { useNavigate } from "react-router-dom";

const ActivateAccountSuccess = () => {
	const [count, setCount] = useState<number>(20);

	const navigate = useNavigate();

	useEffect(() => {
		if (count === 0) {
			navigate("/dashboard");
			return;
		}

		const timer = setInterval(() => {
			setCount((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [count, navigate]);

	return (
		<div className="w-full h-screen">
			<ActivateAccountHeader />
			<div className="w-full section h-full max-h-full">
				<div className="w-full m-auto h-full flex flex-col justify-center items-center">
					<div className="w-[30rem] h-[30rem]">
						<img src={auth} alt="" className=" w-full h-full object-cover" />
					</div>
					<div className="lg:w-[30%] sm:w-[45%] w-[75%] mt-10 text-ceneter items-center flex-col flex space-y-6">
						<h2 className="text-5xl font-semibold font-head normal-case">Activated account</h2>
						<p className="text-3xl text-center font-medium normal-case">
							Your account has been successfully activated. Get ready to explore and enjoy our services.
						</p>
						<button
							className="w-full cursor-pointer hover:scale-95 text-3xl py-5 bg-secondary text-center font-semibold text-white rounded-xl"
							onClick={() => (window.location.href = "/dashboard")}
						>
							Go to dashboard ({count})
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivateAccountSuccess;
