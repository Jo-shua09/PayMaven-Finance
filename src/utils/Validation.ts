export const validateBusinessInfo = (data: {
	businessName: string;
	businessType: string;
	number: string;
	businessEmail: string;
	businessAddress: string;
	cityName: string;
	stateProvince: string;
	countryRegion: string;
}) => {
	const errors: string[] = [];
	if (!data.businessName.trim()) errors.push("Business name is required");
	if (!data.businessType || data.businessType === "select business type") errors.push("Business type is required");
	// if (!data.number.trim()) errors.push("Phone number is required");
	if (!data.businessEmail.trim()) errors.push("Business email is required");
	if (!data.businessAddress.trim()) errors.push("Business address is required");
	if (!data.cityName.trim()) errors.push("City is required");
	if (!data.stateProvince.trim()) errors.push("State/Province is required");
	if (!data.countryRegion.trim()) errors.push("Country/Region is required");

	// Email validation
	if (data.businessEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.businessEmail)) {
		errors.push("Please enter a valid email address");
	}

	return errors;
};

export const validatePersonalInfo = (
	data: {
		personalName: string;
		personalID: string;
		personalEmail: string;
		personalNumber: string;
		nation: string;
		dateOfBirth: string;
		personalAddress: string;
	},
	checkedAddress: boolean
) => {
	const errors: string[] = [];
	if (!data.personalName.trim()) errors.push("personalName");
	if (!data.personalID.trim()) errors.push("personalID");
	if (!data.personalEmail.trim()) errors.push("personalEmail");
	if (!data.personalNumber.trim()) errors.push("personalNumber");
	if (!data.nation.trim()) errors.push("nation");
	if (!data.dateOfBirth) errors.push("dateOfBirth");

	// Only validate personal address if checkbox is NOT checked
	if (checkedAddress && !data.personalAddress.trim()) {
		errors.push("Address is required");
	}

	// Email format validation
	if (data.personalEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.personalEmail)) {
		errors.push("Please enter a valid email address");
	}

	return errors;
};

// export const validatePersonalInfo = (
// 	data: {
// 		personalName: string;
// 		personalID: string;
// 		personalEmail: string;
// 		personalNumber: string;
// 		nation: string;
// 		dateOfBirth: string;
// 		personalAddress: string;
// 	},
// 	checkedAddress: boolean
// ) => {
// 	const errors: string[] = [];
// 	if (!data.personalName.trim()) errors.push("Full name is required");
// 	if (!data.personalID.trim()) errors.push("ID number is required");
// 	if (!data.personalEmail.trim()) errors.push("Email is required");
// 	if (!data.personalNumber.trim()) errors.push("Phone number is required");
// 	if (!data.nation.trim()) errors.push("Nationality is required");
// 	if (!data.dateOfBirth) errors.push("Date of birth is required");

// 	// Only validate personal address if checkbox is not checked
// 	if (!checkedAddress && !data.personalAddress.trim()) {
// 		errors.push("Address is required");
// 	}

// 	// Email validation
// 	if (data.personalEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.personalEmail)) {
// 		errors.push("Please enter a valid email address");
// 	}

// 	return errors;
// };

export const validateBankAccount = (
	data: {
		bankName: string;
		bankBranch: string;
		accountNumber: string;
		holderName: string;
		cardNumber: string;
		expirationDate: string;
		cvv: string;
	},
	cardType: string | null
) => {
	const errors: string[] = [];

	// Basic bank info validation
	if (!data.bankName.trim()) errors.push("Bank name is required");
	if (!data.bankBranch.trim()) errors.push("Bank branch is required");
	if (!data.accountNumber.trim()) errors.push("Account number is required");

	// Card-specific validation if card is selected
	if (cardType === "visa") {
		if (!data.holderName.trim()) errors.push("Cardholder name is required");
		if (!data.cardNumber.trim()) errors.push("Card number is required");
		if (!data.expirationDate.trim()) errors.push("Expiration date is required");
		if (!data.cvv.trim()) errors.push("CVV is required");

		// Basic card number validation
		if (data.cardNumber && !/^\d{16}$/.test(data.cardNumber.replace(/\s/g, ""))) {
			errors.push("Please enter a valid 16-digit card number");
		}

		// CVV validation
		if (data.cvv && !/^\d{3,4}$/.test(data.cvv)) {
			errors.push("Please enter a valid CVV (3-4 digits)");
		}
	}

	return errors;
};

export const validateSecurityInfo = (data: {
	password: string;
	confirmPassword: string;
	securityQuestion: string;
	securityAnswer: string;
	email: string;
	confirmEmail: string;
}) => {
	const errors: string[] = [];

	// Password validation
	if (!data.password) errors.push("Password is required");
	if (data.password.length < 8) errors.push("Password must be at least 8 characters");
	if (!data.confirmPassword) errors.push("Please confirm your password");
	if (data.password !== data.confirmPassword) errors.push("Passwords don't match");

	// Security question validation
	if (!data.securityQuestion) errors.push("Security question is required");
	if (!data.securityAnswer.trim()) errors.push("Security answer is required");

	// Recovery email validation if enabled
	if (data.email) {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
			errors.push("Please enter a valid recovery email");
		}
		if (data.email !== data.confirmEmail) {
			errors.push("Recovery emails don't match");
		}
	}

	return errors;
};
