import { useState } from "react";
import BusinessInfoForm from "../sections/activateAccount/BusinessInfoForm";
import ActivateAccountStepper from "../components/ui/ActivateAccountStepper";
import PersonalInfoForm from "../sections/activateAccount/PersonalInfoForm";
// import BankAccountForm from "../sections/activateAccount/BankAccountForm";
// import SecureAccountForm from "../sections/activateAccount/SecureAccountForm";
// import ReviewInfo from "../sections/activateAccount/ReviewInfo";
import ActivateAccountFormNavigation from "../components/ui/ActivateAccountFormNavigation";

const ActivateAccountFields = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		// Business Info
		businessName: "",
		businessType: "",
		number: "",
		businessEmail: "",
		businessAddress: "",
		cityName: "",
		stateProvince: "",
		countryRegion: "",

		// personal Info
		personalName: "",
		personalID: "",
		personalEmail: "",
		personalNumber: "",
		nation: "",
		dateOfBirth: "",
		personalAddress: "",

		// Bank Account Info
		bankName: "",
		bankAccountNumber: "",
		bankRoutingNumber: "",

		// Secure Account Info
		password: "",
		confirmPassword: "",
	});

	const handleChange = (event: string | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		if (typeof event === "string") {
			// Handle string input if needed
			// Example: setFormData((prev) => ({ ...prev, someField: event }));
			return;
		}
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const renderForm = () => {
		switch (step) {
			case 1:
				return (
					<BusinessInfoForm
						formData={{
							businessName: formData.businessName,
							businessType: formData.businessType,
							number: formData.number,
							businessEmail: formData.businessEmail,
							businessAddress: formData.businessAddress,
							cityName: formData.cityName,
							stateProvince: formData.stateProvince,
							countryRegion: formData.countryRegion,
						}}
						onChange={handleChange}
					/>
				);
			case 2:
				return (
					<PersonalInfoForm
						formData={{
							personalName: formData.personalName,
							personalID: formData.personalID,
							personalEmail: formData.personalEmail,
							personalNumber: formData.personalNumber,
							nation: formData.nation,
							dateOfBirth: formData.dateOfBirth,
							personalAddress: formData.personalAddress,
						}}
						onChange={handleChange}
					/>
				);
			// case 3:
			// 	return (
			// 		<BankAccountForm
			// 			formData={{
			// 				bankName: formData.bankName,
			// 				bankAccountNumber: formData.bankAccountNumber,
			// 				bankRoutingNumber: formData.bankRoutingNumber,
			// 			}}
			// 			onChange={handleChange}
			// 		/>
			// 	);
			// case 4:
			// 	return (
			// 		<SecureAccountForm
			// 			formData={{
			// 				password: formData.password,
			// 				confirmPassword: formData.confirmPassword,
			// 			}}
			// 			onChange={handleChange}
			// 		/>
			// 	);
			// case 5:
			// 	return <ReviewInfo formData={formData} />;
			default:
				return null;
		}
	};

	return (
		<div className="w-[90%] m-auto section-sec !pb-[10rem]">
			<h2 data-aos="fade-right" className="text-5xl mt-28 font-semibold text-nowrap">
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
