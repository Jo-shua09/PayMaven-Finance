import { Link, useLocation } from "react-router-dom";
import signImage from "/src/assets/images/signup_cover.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RemoveRedEyeSharp } from "@mui/icons-material";

const SignUp_Login = () => {
	const location = useLocation();

	return (
		<div className="w-full mx-auto m-auto">
			<div className="w-full section-sec min-h-screen h-full justify-center flex items-center gap-20 flex-wrap sm:flex-nowrap">
				<div className="md:w-1/3 w-full">
					{location.pathname == "/sign-up" ? (
						<div data-aos="fade-right" className="w-full">
							<div className="flex flex-col items-center justify-center place-content-center">
								<div className="flex items-center gap-x-3 mb-16">
									<img src="logo.svg" alt="logo" className="w-16 h-16" />
									<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
								</div>

								<h2 className="font-bold text-4xl mb-6">get started</h2>
								<h3 className="text-5xl font-semibold font-head mb-10">
									<span className="text-secondary">paymaven</span> account
								</h3>

								<form className="w-[95%] space-y-7">
									<div className="w-full">
										<label htmlFor="email" className="pl-1 text-[1.7rem] font-semibold">
											email
										</label>
										<input
											type="email"
											name="email"
											className="bg-[#BCC1CA] normal-case mt-1 focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem] md:h-[5rem]"
											placeholder="example@gmail.com"
										/>
									</div>

									<div className="w-full">
										<label htmlFor="number" className="pl-1 text-[1.7rem] font-semibold">
											Phone number
										</label>
										<PhoneInput
											country={"us"}
											value={""}
											containerClass="w-full"
											inputStyle={{ width: "100%", height: "5.5rem", background: "#BCC1CA" }}
											inputClass="w-full w-[100%] mt-1 text-black focus:border border-secondary font-medium text-base px-4 py-3 rounded-md focus:outline-none placeholder:text-gray"
											placeholder="123 456 7890"
										/>
									</div>

									<div className="w-full">
										<label htmlFor="password" className="pl-1 text-[1.7rem] font-semibold">
											password
										</label>
										<div className="w-full relative">
											<input
												type="password"
												name="password"
												className="bg-[#BCC1CA] normal-case mt-1 mb-5 focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem] md:h-[5rem]"
												placeholder="enter at least 8+ characters "
											/>

											<RemoveRedEyeSharp className="!text-4xl absolute right-4 top-1/4 cursor-pointer hover:text-secondary" />
										</div>
									</div>

									<input
										type="submit"
										value="sign up"
										className="bg-secondary text-nowrap capitalize text-white w-full rounded-xl cursor-pointer hover:scale-95 text-3xl font-semibold h-[5.5rem] md:h-[5rem] text-center "
									/>
								</form>

								<div className="flex pl-8 flex-col gap-y-3 mt-8 !text-left !justify-start">
									<h3 className="text-3xl font-semibold normal-case">Continue with</h3>
									<div className="flex gap-x-5 w-full">
										<img
											src=""
											alt="google logo"
											className="w-14 h-14 object-cover flex items-center  px-10 py-2 rounded-xl bg-[#BCC1CA] hover:scale-95 cursor-pointer"
										/>
										<img
											src=""
											alt="google logo"
											className="w-14 h-14 object-cover flex items-center  px-10 py-2 rounded-xl bg-[#BCC1CA] hover:scale-95 cursor-pointer"
										/>
									</div>
								</div>

								<div className="mt-20 w-full text-center">
									<p className="text-2xl font-medium space-x-2 normal-case">
										Already have an account?{" "}
										<Link to="/login">
											<span className="text-secondary font-semibold">sign in</span>
										</Link>
									</p>
								</div>
							</div>
						</div>
					) : (
						<div data-aos="fade-left" className="w-full translate-x-0">
							<div className="flex flex-col items-center justify-center place-content-center">
								<div className="flex items-center gap-x-3 mb-16">
									<img src="logo.svg" alt="logo" className="w-16 h-16" />
									<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
								</div>

								<h2 className="font-bold text-4xl mb-6">welcome back</h2>
								<h3 className="text-5xl font-semibold font-head mb-10">
									<span className="text-secondary">paymaven</span> account
								</h3>

								<form className="w-[95%] space-y-7">
									<div className="w-full">
										<label htmlFor="email" className="pl-1 text-[1.7rem] font-semibold">
											email
										</label>
										<input
											type="email"
											name="email"
											className="bg-[#BCC1CA] normal-case mt-1 focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem] md:h-[5rem]"
											placeholder="example@gmail.com"
										/>
									</div>
									<div className="w-full">
										<label htmlFor="password" className="pl-1 text-[1.7rem] font-semibold">
											password
										</label>
										<div className="w-full relative">
											<input
												type="password"
												name="password"
												className="bg-[#BCC1CA] normal-case mt-1 mb-5 focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem] md:h-[5rem]"
												placeholder="Enter at least 8+ characters "
											/>

											<RemoveRedEyeSharp className="!text-4xl absolute right-4 top-1/4 cursor-pointer hover:text-secondary" />
										</div>
									</div>

									<input
										type="submit"
										value="sign in"
										className="bg-secondary text-nowrap capitalize text-white w-full rounded-xl cursor-pointer hover:scale-95 text-3xl font-semibold h-[5.5rem] md:h-[5rem] text-center "
									/>
								</form>

								<div className="flex pl-8 flex-col gap-y-3 mt-8 !text-left !justify-start">
									<h3 className="text-3xl font-semibold normal-case">Continue with</h3>
									<div className="flex gap-x-5 w-full">
										<img
											src=""
											alt="google logo"
											className="w-14 h-14 object-cover flex items-center  px-10 py-2 rounded-xl bg-[#BCC1CA] hover:scale-95 cursor-pointer"
										/>
										<img
											src=""
											alt="google logo"
											className="w-14 h-14 object-cover flex items-center  px-10 py-2 rounded-xl bg-[#BCC1CA] hover:scale-95 cursor-pointer"
										/>
									</div>
								</div>

								<div className="mt-20 w-full text-center">
									<p className="text-2xl font-medium space-x-2 normal-case">
										Don't have an account?{" "}
										<Link to="/sign-up">
											<span className="text-secondary font-semibold">sign up</span>
										</Link>
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="sm:flex hidden w-[55rem] h-full">
					<img data-aos="fade-left" loading="lazy" src={signImage} alt="Get started image" className="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	);
};

export default SignUp_Login;
