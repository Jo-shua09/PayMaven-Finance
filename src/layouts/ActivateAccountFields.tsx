import { useState } from "react";
import BusinessInfoForm from "../sections/activateAccount/BusinessInfoForm";
import ActivateAccountStepper from "../components/ui/ActivateAccountStepper";
import PersonalInfoForm from "../sections/activateAccount/PersonalInfoForm";
import BankAccountForm from "../sections/activateAccount/BankAccountForm";
import SecureAccountForm from "../sections/activateAccount/SecureAccountForm";
import ReviewInfo from "../sections/activateAccount/ReviewInfo";
import ActivateAccountFormNavigation from "../components/ui/ActivateAccountFormNavigation";
import { toast } from "react-toastify";

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
		bankBranch: "",
		accountNumber: "",
		holderName: "",
		cardNumber: "",
		expirationDate: "",
		cvv: "",

		// Secure Account Info
		password: "",
		confirmPassword: "",
		securityQuestion: "",
		securityAnswer: "",
		twoFactorEnabled: false,
		recoveryEmail: "",
		email: "",
		confirmEmail: "",
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
			case 3:
				return (
					<BankAccountForm
						formData={{
							bankName: formData.bankName,
							bankBranch: formData.bankBranch,
							accountNumber: formData.accountNumber,
							holderName: formData.holderName,
							cardNumber: formData.cardNumber,
							expirationDate: formData.expirationDate,
							cvv: formData.cvv,
						}}
						onChange={handleChange}
					/>
				);
			case 4:
				return (
					<SecureAccountForm
						formData={{
							password: formData.password,
							confirmPassword: formData.confirmPassword,
							securityQuestion: formData.securityQuestion,
							securityAnswer: formData.securityAnswer,
							twoFactorEnabled: formData.twoFactorEnabled,
							recoveryEmail: formData.recoveryEmail,
							email: formData.email,
							confirmEmail: formData.confirmEmail,
						}}
						onChange={handleChange}
					/>
				);
			case 5:
				return <ReviewInfo formData={formData} />;
			default:
				return null;
		}
	};

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		setIsSubmitting(true);
		try {
			// Here you would typically send the data to your backend API
			// Example:
			// const response = await axios.post('/api/activate-account', formData);

			// Clear localStorage images after successful submission
			localStorage.removeItem("idFrontImage");
			localStorage.removeItem("idBackImage");

			// Return true to indicate success
			return true;
		} catch (error) {
			console.error("Submission error:", error);
			toast.error("Failed to submit application. Please try again.");
			return false;
		} finally {
			setIsSubmitting(false);
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
			<ActivateAccountFormNavigation
				step={step}
				setStep={setStep}
				isSubmitting={isSubmitting}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};

export default ActivateAccountFields;
