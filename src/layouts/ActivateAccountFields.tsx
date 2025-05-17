import { useState } from "react";
import BusinessInfoForm from "../sections/activateAccount/BusinessInfoForm";
import ActivateAccountStepper from "../components/ui/ActivateAccountStepper";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import OwnerInfoForm from "../sections/activateAccount/OwnerInfoForm";
import BankAccountForm from "../sections/activateAccount/BankAccountForm";
import SecureAccountForm from "../sections/activateAccount/SecureAccountForm";
import ReviewInfo from "../sections/activateAccount/ReviewInfo";
import { toast } from "react-toastify";

const ActivateAccountFields = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		businessName: "",
		businessAddress: "",
		ownerName: "",
		bankAccount: "",
		password: "",
	});

	const stepMessages = {
		2: "Business info saved, moving to Owner Info.",
		3: "Owner info saved, let's add bank details.",
		4: "Bank info saved, now secure your account.",
		5: "Account secured, time to review everything.",
	};

	toast.success(stepMessages[step as keyof typeof stepMessages]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const renderForm = () => {
		switch (step) {
			case 1:
				return <BusinessInfoForm formData={formData} onChange={handleChange} />;
			case 2:
				return <OwnerInfoForm formData={formData} onChange={handleChange} />;
			case 3:
				return <BankAccountForm formData={formData} onChange={handleChange} />;
			case 4:
				return <SecureAccountForm formData={formData} onChange={handleChange} />;
			case 5:
				return <ReviewInfo formData={formData} />;
			default:
				return null;
		}
	};

	return (
		<div className="w-[90%] m-auto section-sec">
			<h2 data-aos="fade-right" className="text-5xl font-semibold text-nowrap">
				activate account
			</h2>
			<div className="flex-[2] mt-24 flex gap-8 w-full">
				<ActivateAccountStepper currentStep={step} />
				<div className="w-full space-y-6 flex-[6]">
					{renderForm()}

					<div className="flex items-center space-x-10 place-content-end">
						{step > 1 && (
							<button
								onClick={() => setStep(step - 1)}
								className="bg-gray-200 flex items-center gap-x-3 text-2xl text-gray-700 capitalize font-semibold px-10 py-6 hover:scale-95 rounded-md"
							>
								<ArrowBack className="!text-4xl" />
								Back
							</button>
						)}
						{step < 5 && (
							<button
								onClick={() => {
									setStep(step + 1);
								}}
								className="bg-secondary flex items-center gap-x-3 text-2xl capitalize font-semibold text-white px-5 py-6 hover:scale-95 rounded-md"
							>
								continue
								<ArrowForward className="!text-4xl" />
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivateAccountFields;
