import { Link, useLocation, useNavigate } from "react-router-dom";
import signImage from "/src/assets/images/signup_cover.jpg";
import google from "/src/assets/images/google.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RemoveRedEyeSharp, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp_Login = () => {
	const location = useLocation();
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const Navigate = useNavigate();

	const togglePassword = () => setShowPassword((prev) => !prev);

	const signUp = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			console.log("User signed up successfully");
			toast.success("Account created successfully!");
			setTimeout(() => Navigate("/login"), 2000);
		} catch (error) {
			if (error && typeof error === "object" && "code" in error) {
				console.error("Error signing up:", (error as { code: string }).code);
				toast.error("Failed to sign up: " + (error as { code: string }).code);
			} else {
				console.error("Error signing up:", error);
				toast.error("Failed to sign up.");
			}
		}
	};

	const signIn = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success("Signed in successfully!");
			setTimeout(() => Navigate("/dashboard"), 1500);
		} catch (error) {
			if (error && typeof error === "object" && "code" in error) {
				const errorCode = (error as { code: string }).code;
				console.error("Error signing in:", errorCode);

				switch (errorCode) {
					case "password mismatch":
						toast.error("Wrong password. Please try again.");
						console.log(password);
						break;

					case "auth/invalid-credential":
						toast.info("No user found. Please sign up first.");
						setTimeout(() => Navigate("/sign-up"), 1500);
						break;

					case "auth/invalid-email":
						toast.error("Invalid email address.");
						break;

					default:
						toast.error("Failed to sign in: " + errorCode);
						break;
				}
			} else {
				toast.error("Unexpected error occurred.");
			}
		}
	};

	const signUpWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
			toast.success("Account created successfully!");
			setTimeout(() => Navigate("/dashboard"), 2000);
			console.log("User signed up with Google successfully");
		} catch (error) {
			console.error("Error with Google sign up:", error);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
			toast.success("Signed in successfully!");
			setTimeout(() => Navigate(""), 1500);
			console.log("User signed in with Google successfully");
		} catch (error) {
			console.error("Error with Google sign in:", error);
		}
	};

	// const logout = async () => {
	// 	try {
	// 		await signOut(auth);
	// 		console.log("User signed out successfully");
	// 		toast.success("Signed out successfully!");
	// 		setTimeout(() => Navigate(""), 1500);
	// 	} catch (error) {
	// 		console.error("Error signing out:", error);
	// 	}
	// };

	const isSignUp = location.pathname === "/sign-up";

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

							<form data-aos="fade-right" className="w-[95%] space-y-7" onSubmit={isSignUp ? signUp : signIn}>
								<div>
									<label className="pl-1 text-[1.7rem] font-semibold">Email</label>
									<input
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="example@gmail.com"
										className="bg-[#BCC1CA] normal-case mt-1 focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
									/>
								</div>

								{isSignUp && (
									<div>
										<label className="pl-1 text-[1.7rem] font-semibold">Phone number</label>
										<PhoneInput
											country={"us"}
											containerClass="w-full"
											inputStyle={{ width: "100%", height: "5.5rem", background: "#BCC1CA" }}
											inputClass="mt-1 text-black font-medium text-base px-4 py-3 rounded-md placeholder:text-gray"
											placeholder="123 456 7890"
										/>
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
											className="bg-[#BCC1CA] mt-1 mb-5 placeholder:normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
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

								<input
									type="submit"
									value={isSignUp ? "Sign up" : "Sign in"}
									className="bg-secondary text-white w-full rounded-xl cursor-pointer hover:scale-95 text-3xl font-semibold h-[5.5rem]"
								/>
							</form>

							{/* <div className="text-center mt-6 text-2xl">
								<button onClick={logout} className="underline">
									Logout
								</button>
							</div> */}

							<div className="mt-10 text-center w-full">
								<h3 className="text-3xl font-semibold mb-4"> {isSignUp ? "Sign up with" : "Sign in with"}</h3>
								<div className="flex justify-center gap-5">
									<div
										className="bg-[#BCC1CA] px-10 rounded-xl cursor-pointer hover:scale-95"
										onClick={isSignUp ? signUpWithGoogle : signInWithGoogle}
									>
										<img src={google} alt="Google" className="w-[5rem] h-[5rem] object-cover" />
									</div>
									<div
										className="bg-[#BCC1CA] px-10 rounded-xl cursor-pointer hover:scale-95"
										onClick={isSignUp ? signUpWithGoogle : signInWithGoogle}
									>
										<img src={google} alt="Google" className="w-[5rem] h-[5rem] object-cover" />
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
