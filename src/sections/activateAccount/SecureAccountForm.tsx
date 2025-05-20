import { Security } from "@mui/icons-material";
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
	const [activeOption, setActiveOption] = useState<"password" | "recoveryEmail" | null>(null);

	return (
		<div data-aos="fade-up" className="w-full space-y-8">
			<div className="w-full flex items-center gap-x-5">
				<Security className="!text-6xl p-3 rounded-xl bg-secondary text-white" />
				<span className="text-3xl font-semibold">Secure account</span>
			</div>

			<div className="w-full space-y-10">
				<div className="w-full flex items-center gap-10 flex-wrap md:flex-nowrap">
					<div
						onClick={() => setActiveOption("password")}
						className={`flex items-center gap-x-5 w-full border rounded-xl p-8 cursor-pointer ${
							activeOption === "password" ? "bg-secondary/20 border-secondary" : "bg-primary"
						}`}
					>
						<input
							type="radio"
							checked={activeOption === "password"}
							name="securityOption"
							onChange={() => setActiveOption("password")}
							className="ml-2 accent-secondary cursor-pointer"
						/>
						<span className="text-3xl font-semibold font-head">Set strong password</span>
					</div>

					<div
						onClick={() => setActiveOption("recoveryEmail")}
						className={`flex items-center gap-x-5 w-full border rounded-xl p-8 cursor-pointer ${
							activeOption === "recoveryEmail" ? "bg-secondary/20 border-secondary" : "bg-primary"
						}`}
					>
						<input
							type="radio"
							checked={activeOption === "recoveryEmail"}
							name="securityOption"
							onChange={() => setActiveOption("recoveryEmail")}
							className="ml-2 accent-secondary cursor-pointer"
						/>
						<span className="text-3xl font-semibold font-head">Set recovery email</span>
					</div>
				</div>

				{activeOption === "password" && (
					<form className="w-full grid sm:grid-cols-2 grid-cols-1 gap-10">
						<div className="w-full space-y-2">
							<label className="text-[1.7rem] font-semibold">Enter password</label>
							<input
								required
								type="password"
								name="password"
								value={formData.password}
								onChange={onChange}
								placeholder="Enter password"
								className="bg-tertiary focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
							/>
						</div>
						<div className="w-full space-y-2">
							<label className="text-[1.7rem] font-semibold">Confirm password</label>
							<input
								required
								type="password"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={onChange}
								placeholder="Confirm password"
								className="bg-tertiary focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
							/>
						</div>
					</form>
				)}

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
								className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
							/>
						</div>
						<div className="w-full space-y-2">
							<label className="text-[1.7rem] font-semibold">Confirm email</label>
							<input
								required
								type="email"
								name="confirmEmail"
								value={formData.confirmEmail}
								onChange={onChange}
								placeholder="Confirm email"
								className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
							/>
						</div>
					</form>
				)}
			</div>

			{/* Security Question */}
			<form className="w-full">
				<label className="text-[1.7rem] font-semibold">Security Question</label>
				<div className="w-full space-y-8">
					<select
						name="securityQuestion"
						value={formData.securityQuestion}
						onChange={onChange}
						className="bg-tertiary cursor-pointer appearance-none focus:border border-secondary capitalize pl-5 text-[1.7rem] text-black font-semibold rounded-xl w-full h-[5.5rem]"
					>
						<option value="">Select a question</option>
						<option value="mother_maiden">What is your mother's maiden name?</option>
						<option value="first_pet">What was your first pet's name?</option>
						<option value="birth_city">What city were you born in?</option>
					</select>
					<input
						type="text"
						name="securityAnswer"
						value={formData.securityAnswer}
						onChange={onChange}
						placeholder="Your answer"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
			</form>

			{/* Two Factor Auth */}
			<div className="flex items-center gap-4">
				<input
					type="checkbox"
					name="twoFactorEnabled"
					checked={formData.twoFactorEnabled}
					onChange={(e) =>
						onChange({
							target: { name: "twoFactorEnabled", value: e.target.checked },
						} as any)
					}
				/>
				<label className="text-xl">Enable Two-Factor Authentication (2FA)</label>
			</div>

			{/* Recovery Email */}
			{formData.twoFactorEnabled && (
				<div>
					<label className="block text-xl mb-2">Recovery Email</label>
					<input
						type="email"
						name="recoveryEmail"
						value={formData.recoveryEmail}
						onChange={onChange}
						className="w-full p-4 border rounded"
						placeholder="Enter recovery email"
					/>
				</div>
			)}
		</div>
	);
};

export default SecureAccountForm;
