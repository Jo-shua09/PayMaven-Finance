import { RemoveRedEye, VisibilityOff, Security } from "@mui/icons-material";
import { useState } from "react";

interface SecureAccountFormProps {
	formData: {
		password: string;
		confirmPassword: string;
		securityQuestion: string;
		securityAnswer: string;
		twoFactorEnabled: boolean;
		recoveryEmail: string;
		email: string;
		confirmEmail: string;
	};
	onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | string) => void;
}

const SecureAccountForm: React.FC<SecureAccountFormProps> = ({ formData, onChange }) => {
	const [activeOption, setActiveOption] = useState<"password" | "recoveryEmail">("password");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

	return (
		<div data-aos="fade-up" className="w-full space-y-8">
			<div className="w-full flex items-center gap-x-5">
				<Security className="!text-6xl p-3 rounded-xl bg-secondary text-white" />
				<span className="text-3xl font-semibold">Secure account</span>
			</div>

			<div className="w-full space-y-10 !mb-20">
				{/* Security Options Toggle */}
				<div className="w-[60%] flex items-center gap-10 flex-wrap md:flex-nowrap">
					<div
						onClick={() => setActiveOption("password")}
						className={`flex items-center gap-x-5 w-full border-2 rounded-xl p-8 cursor-pointer transition-all ${
							activeOption === "password"
								? "bg-secondary/10 border-secondary shadow-md"
								: "bg-primary border-gray-200 hover:border-gray-300"
						}`}
					>
						<input
							type="radio"
							checked={activeOption === "password"}
							name="securityOption"
							onChange={() => setActiveOption("password")}
							className="ml-2 accent-secondary cursor-pointer !h-6 !w-6"
						/>
						<span className="text-2xl text-nowrap font-semibold">Set strong password</span>
					</div>

					<div
						onClick={() => setActiveOption("recoveryEmail")}
						className={`flex items-center gap-x-5 w-full border-2 rounded-xl p-8 cursor-pointer transition-all ${
							activeOption === "recoveryEmail"
								? "bg-secondary/10 border-secondary shadow-md"
								: "bg-primary border-gray-200 hover:border-gray-300"
						}`}
					>
						<input
							type="radio"
							checked={activeOption === "recoveryEmail"}
							name="securityOption"
							onChange={() => setActiveOption("recoveryEmail")}
							className="ml-2 accent-secondary cursor-pointer !h-6 !w-6"
						/>
						<span className="text-2xl font-semibold text-nowrap">Enable Two-Factor Authentication (2FA)</span>
					</div>
				</div>

				{/* Password Section */}
				{activeOption === "password" && (
					<form className="w-full grid sm:grid-cols-2 grid-cols-1 gap-10">
						<div className="w-full space-y-2 relative">
							<label className="text-[1.7rem] font-semibold">Enter password</label>
							<div className="relative">
								<input
									required
									type={showPassword ? "text" : "password"}
									name="password"
									value={formData.password}
									onChange={onChange}
									placeholder="Enter at least 8+ characters"
									className="bg-tertiary focus:border border-secondary pl-5 pr-12 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
								/>
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-secondary"
								>
									{showPassword ? <VisibilityOff className="!text-4xl" /> : <RemoveRedEye className="!text-4xl" />}
								</button>
							</div>
						</div>

						<div className="w-full space-y-2 relative">
							<label className="text-[1.7rem] font-semibold">Confirm password</label>
							<div className="relative">
								<input
									required
									type={showConfirmPassword ? "text" : "password"}
									name="confirmPassword"
									value={formData.confirmPassword}
									onChange={onChange}
									placeholder="Re-enter password"
									className="bg-tertiary focus:border border-secondary pl-5 pr-12 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
								/>
								<button
									type="button"
									onClick={toggleConfirmPasswordVisibility}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-secondary"
								>
									{showConfirmPassword ? (
										<VisibilityOff className="!text-4xl" />
									) : (
										<RemoveRedEye className="!text-4xl" />
									)}
								</button>
							</div>
						</div>
					</form>
				)}

				{/* Two Factor Auth Section */}
				{activeOption === "recoveryEmail" && (
					<form className="w-full grid sm:grid-cols-2 grid-cols-1 gap-10">
						<div className="w-full space-y-2">
							<label className="text-[1.7rem] font-semibold">Enter recovery email</label>
							<input
								required
								type="email"
								name="email"
								value={formData.email}
								onChange={onChange}
								placeholder="Enter email"
								className="bg-tertiary focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
							/>
						</div>

						<div className="w-full space-y-2">
							<label className="text-[1.7rem] font-semibold">Confirm recovery email</label>
							<input
								required
								type="email"
								name="confirmEmail"
								value={formData.confirmEmail}
								onChange={onChange}
								placeholder="Re-enter email"
								className="bg-tertiary focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
							/>
						</div>
					</form>
				)}
			</div>

			{/* Security Question Section */}
			<div className="w-full space-y-4">
				<label className="text-[1.7rem] font-semibold">Security Question</label>
				<select
					name="securityQuestion"
					value={formData.securityQuestion}
					onChange={onChange}
					className="bg-tertiary cursor-pointer appearance-none focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold rounded-xl w-full h-[5.5rem] mb-4"
				>
					<option value="">Select a security question</option>
					<option value="mother_maiden">What is your mother's maiden name?</option>
					<option value="first_pet">What was your first pet's name?</option>
					<option value="birth_city">What city were you born in?</option>
					<option value="elementary_school">What elementary school did you attend?</option>
					<option value="favorite_teacher">Who was your favorite teacher?</option>
				</select>

				<div className="w-full space-y-2">
					<input
						type="text"
						name="securityAnswer"
						value={formData.securityAnswer}
						onChange={onChange}
						placeholder="Your answer"
						className="bg-tertiary focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
			</div>
		</div>
	);
};

export default SecureAccountForm;
