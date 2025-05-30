import { Add, Person3Outlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

interface PersonalInfoFormProps {
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
	checked: boolean;
	setChecked: (val: boolean) => void;
	errors?: string[];
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
	formData,
	onChange,
	checked,
	setChecked,
	errors = [],
}) => {
	// Helper function to check if field has error
	const hasError = (fieldName: string) => {
		return errors.some((err) => err.toLowerCase().includes(fieldName.toLowerCase()));
	};
	const frontInputRef = useRef<HTMLInputElement | null>(null);
	const backInputRef = useRef<HTMLInputElement | null>(null);
	const [frontImage, setFrontImage] = useState<string | null>(null);
	const [backImage, setBackImage] = useState<string | null>(null);
	// const [checked, setChecked] = useState(false);

	// Load images from localStorage when component mounts
	useEffect(() => {
		const storedFrontImage = localStorage.getItem("idFrontImage");
		const storedBackImage = localStorage.getItem("idBackImage");

		if (storedFrontImage) setFrontImage(storedFrontImage);
		if (storedBackImage) setBackImage(storedBackImage);
	}, []);

	const handleImageChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setImage: React.Dispatch<React.SetStateAction<string | null>>,
		storageKey: string
	) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const imageDataUrl = reader.result as string;
				setImage(imageDataUrl);
				localStorage.setItem(storageKey, imageDataUrl);
			};
			reader.readAsDataURL(file);
		}
	};

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
					{/* Front */}
					<div className="w-full relative">
						<input
							type="file"
							accept="image/*"
							className="hidden"
							ref={frontInputRef}
							onChange={(e) => handleImageChange(e, setFrontImage, "idFrontImage")}
						/>
						<div
							onClick={() => frontInputRef.current && frontInputRef.current.click()}
							className="w-full cursor-pointer h-[25rem] rounded-xl border border-tertiary bg-transparent flex justify-center items-center relative overflow-hidden"
						>
							{frontImage ? (
								<img
									loading="lazy"
									src={frontImage}
									alt="Front"
									className="p-4 shadow-2xl w-full h-full object-cover rounded-xl"
								/>
							) : (
								<span className="text-2xl flex items-center gap-x-3">
									<Add className="!text-5xl" />
									front
								</span>
							)}
						</div>
					</div>

					{/* Back */}
					<div className="w-full relative">
						<input
							type="file"
							accept="image/*"
							className="hidden"
							ref={backInputRef}
							onChange={(e) => handleImageChange(e, setBackImage, "idBackImage")}
						/>
						<div
							onClick={() => backInputRef.current && backInputRef.current.click()}
							className="w-full cursor-pointer h-[25rem] rounded-xl border border-tertiary bg-transparent flex justify-center items-center relative overflow-hidden"
						>
							{backImage ? (
								<img
									loading="lazy"
									src={backImage}
									alt="Back"
									className="p-4 shadow-2xl w-full h-full object-cover rounded-xl"
								/>
							) : (
								<span className="text-2xl flex items-center gap-x-3">
									<Add className="!text-5xl" />
									back
								</span>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-x-4 text-2xl font-semibold normal-case">
				<input
					type="checkbox"
					name="checkedAddress"
					checked={checked}
					onChange={() => setChecked(!checked)}
					className="!bg-transparent accent-secondary cursor-pointer"
				/>
				Same business address
			</div>

			{/* Personal Address Field (only shown when checkbox is unchecked) */}
			{!checked && (
				<div className="w-full md:w-1/2 space-y-2">
					<label className="text-[1.7rem] font-semibold">Personal Address</label>
					<input
						required
						type="text"
						name="personalAddress"
						value={formData.personalAddress}
						onChange={onChange}
						placeholder="Enter personal address"
						className={`bg-tertiary normal-case focus:border ${
							hasError("personal address") ? "border-red-500" : "border-secondary"
						} pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]`}
					/>
					{hasError("personal address") && <p className="text-red-500 text-lg">Personal address is required</p>}
				</div>
			)}
		</div>
	);
};

export default PersonalInfoForm;
