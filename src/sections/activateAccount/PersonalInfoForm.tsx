import { Add, Person3Outlined } from "@mui/icons-material";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";

interface personalInfoFormProps {
	formData: {
		personalName: string;
		personalID: string;
		personalEmail: string;
		personalNumber: string;
		nation: string;
		dateOfBirth: string;
		personalAddress: string;
	};
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoForm: React.FC<personalInfoFormProps> = ({ formData, onChange }) => {
	const [checked, setChecked] = useState(false);

	return (
		<div data-aos="fade-up" className="w-full space-y-8">
			<div className="w-full flex items-center gap-x-5">
				<Person3Outlined className="!text-6xl p-3 rounded-xl bg-secondary text-white" />
				<span className="text-3xl font-semibold">personal information</span>
			</div>

			<form className="w-full sm:grid-cols-2 grid-cols-1 gap-10 grid">
				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">full name</label>
					<input
						required
						type="text"
						name="personalName"
						value={formData.personalName}
						onChange={onChange}
						placeholder="Enter full name"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="pl-1 text-[1.7rem] font-semibold">ID number</label>
					<input
						required
						type="text"
						name="personalID"
						value={formData.personalID}
						onChange={onChange}
						placeholder="Enter ID number"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">email</label>
					<input
						required
						type="email"
						name="personalEmail"
						value={formData.personalEmail}
						onChange={onChange}
						placeholder="Enter email address"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">phone number</label>
					<input
						required
						type="tel"
						name="personalNumber"
						value={formData.personalNumber}
						onChange={onChange}
						placeholder="Enter phone number"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">nationality</label>
					<input
						required
						type="text"
						name="nation"
						value={formData.nation}
						onChange={onChange}
						placeholder="Enter nationality"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">date of birth</label>
					<input
						required
						type="date"
						name="dateOfBirth"
						value={formData.dateOfBirth}
						onChange={onChange}
						placeholder="Enter date of birth"
						className="bg-tertiary normal-case no-calendar focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
			</form>

			<div className="w-full space-y-2">
				<label className="text-[1.7rem] font-semibold">ID Image</label>
				<div className="flex items-center gap-10 flex-wrap md:flex-nowrap">
					<div className="w-full relative">
						<div className="w-full cursor-pointer h-[7rem] rounded-xl border border-tertiary bg-transparent">
							<span className="absolute top-1/3 text-2xl left-4 flex items-center gap-x-3">
								<Add className="!text-5xl" />
								front
							</span>
						</div>
					</div>

					<div className="w-full relative">
						<div className="w-full cursor-pointer h-[7rem] rounded-xl border border-tertiary bg-transparent">
							<span className="absolute top-1/3 text-2xl left-4 flex items-center gap-x-3">
								<Add className="!text-5xl" />
								back
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-x-4 text-2xl font-semibold normal-case">
				<input
					required
					type="checkbox"
					name="checkedAddress"
					onClick={() => setChecked(!checked)}
					className="!bg-transparent accent-secondary cursor-pointer "
				/>
				Same business address
			</div>

			<div className={`${!checked ? "translate-y-0" : "opacity-0 hidden translate-y-full"} w-full md:w-1/2 space-y-2`}>
				<label className="text-[1.7rem] font-semibold"> address</label>
				<input
					required
					type="text"
					name="personalAddress"
					value={formData.personalAddress}
					onChange={onChange}
					placeholder="Enter address"
					className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
				/>
			</div>
		</div>
	);
};

export default PersonalInfoForm;
