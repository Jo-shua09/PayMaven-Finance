import { Link, useLocation, useNavigate } from "react-router-dom";
import signImage from "/src/assets/images/signup_cover.jpg";
import google from "/src/assets/images/google.png";
import apple from "/src/assets/images/apple.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RemoveRedEyeSharp, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { signIn, signInWithGoogle, signUp, signUpWithGoogle } from "../services/AuthService";

const SignUp_Login = () => {
	const location = useLocation();
	const [email, setEmail] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [phone, setPhone] = useState("");
	const [phoneError, setPhoneError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (isSignUp) {
			await signUp({ email, password, navigate, setLoading });
		} else {
			await signIn({ email, password, navigate, setLoading });
		}
	};

	const isSignUp = location.pathname === "/sign-up";

	const togglePassword = () => setShowPassword((prev) => !prev);

	return (
		<div className="w-full mx-auto">
			<div className="w-full md:section min-h-screen flex items-center justify-center gap-20 flex-wrap sm:flex-nowrap px-[3%] -mt-20 md:-mt-10">
				<div className="md:w-1/3 w-full max-h-screen h-[90%] overflow-y-hidden">
					<div data-aos="fade-right" className="w-full h-full">
						<div className="flex flex-col items-center justify-center">
							<div className="flex items-center gap-x-3 mb-10">
								<img src="/logo.svg" alt="logo" className="w-16 h-16" />
								<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
							</div>

							<h2 className="font-bold text-4xl mb-6">{isSignUp ? "Get started" : "Welcome back"}</h2>
							<h3 className="text-5xl font-semibold mb-10 font-head">
								<span className="text-secondary">PayMaven</span> account
							</h3>

							<form data-aos="fade-right" className="w-[95%] space-y-7" onSubmit={handleSubmit}>
								<div>
									<label className="pl-1 text-[1.7rem] font-semibold">Email</label>
									<input
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="example@gmail.com"
										className="bg-tertiary normal-case mt-1 focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
									/>
								</div>

								{isSignUp && (
									<div>
										<label className="pl-1 text-[1.7rem] font-semibold">Phone number</label>
										<PhoneInput
											country={"us"}
											value={phone}
											onChange={(phone) => {
												setPhone(phone);
												setPhoneError("");
											}}
											containerClass="w-full"
											inputStyle={{ width: "100%", height: "5.5rem", background: "#BCC1CA" }}
											inputClass="mt-1 text-black font-medium text-base px-4 py-3 rounded-md placeholder:text-gray"
											placeholder="123 456 7890"
										/>
										{phoneError && <p className="text-red-600 text-sm mt-1">{phoneError}</p>}
									</div>
								)}

								<div>
									<label className="pl-1 text-[1.7rem] font-semibold">Password</label>
									<div className="relative">
										<input
											type={showPassword ? "text" : "password"}
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="enter at least 8+ characters"
											className="bg-tertiary mt-1 mb-5 placeholder:normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
										/>
										{showPassword ? (
											<RemoveRedEyeSharp
												className="!text-4xl absolute right-4 top-1/4 cursor-pointer hover:text-secondary"
												onClick={togglePassword}
											/>
										) : (
											<VisibilityOff
												className="!text-4xl absolute right-4 top-1/4 cursor-pointer hover:text-secondary"
												onClick={togglePassword}
											/>
										)}
									</div>
								</div>

								{loading ? (
									<button
										disabled
										className="bg-secondary text-white w-full rounded-xl cursor-not-allowed text-3xl font-semibold h-[5.5rem] flex items-center justify-center opacity-70"
									>
										<span className="border-t-2 border-white rounded-full p-7 animate-spin"></span>
									</button>
								) : (
									<button
										type="submit"
										className="bg-secondary text-white w-full rounded-xl cursor-pointer hover:scale-95 text-3xl font-semibold h-[5.5rem] flex items-center justify-center"
									>
										{isSignUp ? "Sign up" : "Sign in"}
									</button>
								)}
							</form>

							<div className="mt-10 text-center w-full">
								<h3 className="text-3xl font-semibold mb-4"> {isSignUp ? "Sign up with" : "Sign in with"}</h3>
								<div className="flex justify-center gap-5">
									<div
										className="bg-tertiary px-10 flex items-center rounded-xl cursor-pointer hover:scale-95"
										onClick={() =>
											isSignUp ? signUpWithGoogle({ navigate, setLoading }) : signInWithGoogle({ navigate, setLoading })
										}
									>
										<img src={google} alt="Google" className="w-[5rem] h-[5rem] object-cover" />
									</div>
									<div
										className="bg-tertiary px-10 flex items-center rounded-xl cursor-not-allowed hover:scale-95"
										// onClick={() =>
										// 	isSignUp ? signUpWithGoogle({ navigate, setLoading }) : signInWithGoogle({ navigate, setLoading })
										// }
									>
										<img src={apple} alt="Google" className="w-[7rem] h-[6rem] object-cover" />
									</div>
								</div>
							</div>

							<div className="mt-10 text-center w-full">
								<p className="text-2xl font-medium normal-case">
									{isSignUp ? (
										<>
											Already have an account?{" "}
											<Link to="/login" className="text-secondary font-semibold">
												Sign in
											</Link>
										</>
									) : (
										<>
											Don't have an account?{" "}
											<Link to="/sign-up" className="text-secondary font-semibold">
												Sign up
											</Link>
										</>
									)}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="md:flex hidden w-[55rem] h-full">
					<img
						data-aos="fade-left"
						src={signImage}
						alt="Get started"
						className="w-full h-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default SignUp_Login;
