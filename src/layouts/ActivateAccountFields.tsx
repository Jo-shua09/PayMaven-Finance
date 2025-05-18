import { useState } from "react";
import BusinessInfoForm from "../sections/activateAccount/BusinessInfoForm";
import ActivateAccountStepper from "../components/ui/ActivateAccountStepper";
import OwnerInfoForm from "../sections/activateAccount/OwnerInfoForm";
import BankAccountForm from "../sections/activateAccount/BankAccountForm";
import SecureAccountForm from "../sections/activateAccount/SecureAccountForm";
import ReviewInfo from "../sections/activateAccount/ReviewInfo";
import ActivateAccountFormNavigation from "../components/ui/ActivateAccountFormNavigation";

const ActivateAccountFields = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		businessName: "",
		businessAddress: "",
		ownerName: "",
		bankAccount: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
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
		<div className="w-[90%] m-auto section-sec !pb-[10rem]">
			<h2 data-aos="fade-right" className="text-5xl font-semibold text-nowrap">
				activate account
			</h2>

			<div className="mt-24 flex gap-8 gap-y-20 w-full flex-wrap md:flex-nowrap">
				<ActivateAccountStepper currentStep={step} />
				<div className="w-full space-y-6 md:flex-[6]">{renderForm()}</div>
			</div>
			<ActivateAccountFormNavigation step={step} setStep={setStep} />
		</div>
	);
};

export default ActivateAccountFields;
