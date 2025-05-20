import { useEffect, useState } from "react";
import { CheckCircle, Reviews } from "@mui/icons-material";

interface ReviewInfoProps {
	formData: {
		// Business Info
		businessName: string;
		businessType: string;
		number: string;
		businessEmail: string;
		businessAddress: string;
		cityName: string;
		stateProvince: string;
		countryRegion: string;

		// Personal Info
		personalName: string;
		personalID: string;
		personalEmail: string;
		personalNumber: string;
		nation: string;
		dateOfBirth: string;
		personalAddress: string;

		// Bank Account Info
		bankName: string;
		bankBranch: string;
		accountNumber: string;
		holderName: string;
		cardNumber: string;
		expirationDate: string;
		cvv: string;

		// Secure Account Info
		password: string;
		confirmPassword: string;
		securityQuestion: string;
		securityAnswer: string;
		twoFactorEnabled: boolean;
		recoveryEmail: string;
		email: string;
		confirmEmail: string;
	};
}

const ReviewInfo: React.FC<ReviewInfoProps> = ({ formData }) => {
	const [frontImage, setFrontImage] = useState<string | null>(null);
	const [backImage, setBackImage] = useState<string | null>(null);

	// Load images from localStorage
	useEffect(() => {
		const storedFrontImage = localStorage.getItem("idFrontImage");
		const storedBackImage = localStorage.getItem("idBackImage");

		if (storedFrontImage) setFrontImage(storedFrontImage);
		if (storedBackImage) setBackImage(storedBackImage);
	}, []);

	return (
		<div data-aos="fade-up" className="w-full space-y-12">
			<div className="w-full flex items-center gap-x-5">
				<Reviews className="!text-6xl p-3 rounded-xl bg-secondary text-white" />
				<span className="text-3xl font-semibold">review information</span>
			</div>

			{/* Business Information Section */}
			<div className="bg-gray-50 rounded-xl">
				<h4 className="text-4xl font-semibold mb-4 flex items-center gap-2">
					<CheckCircle className="text-green-500 !text-5xl" /> Business Information
				</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<InfoItem label="Business Name" value={formData.businessName} />
					<InfoItem label="Business Type" value={formData.businessType} />
					<InfoItem label="Business Number" value={formData.number} />
					<InfoItem label="Business Email" value={formData.businessEmail} />
					<InfoItem label="Business Address" value={formData.businessAddress} />
					<InfoItem label="City" value={formData.cityName} />
					<InfoItem label="State/Province" value={formData.stateProvince} />
					<InfoItem label="Country/Region" value={formData.countryRegion} />
				</div>
			</div>

			{/* Personal Information Section */}
			<div className="w-full">
				<h4 className="text-4xl font-semibold mb-4 flex items-center gap-2">
					<CheckCircle className="text-green-500 !text-5xl" /> Personal Information
				</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<InfoItem label="Full Name" value={formData.personalName} />
					<InfoItem label="ID Number" value={formData.personalID} />
					<InfoItem label="Personal Email" value={formData.personalEmail} />
					<InfoItem label="Phone Number" value={formData.personalNumber} />
					<InfoItem label="Nationality" value={formData.nation} />
					<InfoItem label="Date of Birth" value={formData.dateOfBirth} />
					<InfoItem label="Personal Address" value={formData.personalAddress} />
				</div>

				{/* ID Images */}
				<div className="mt-6">
					<h5 className="text-3xl font-semibold mb-3">ID Images</h5>
					<div className="flex flex-wrap gap-4">
						{frontImage && (
							<div className="w-full md:w-1/3">
								<p className="font-medium mb-2 text-xl">Front Side</p>
								<img
									loading="lazy"
									src={frontImage}
									alt="ID Front"
									className="rounded-lg border border-gray-200 w-full h-auto max-h-64 object-contain"
								/>
							</div>
						)}
						{backImage && (
							<div className="w-full md:w-1/3">
								<p className="font-medium mb-2 text-xl">Back Side</p>
								<img
									loading="lazy"
									src={backImage}
									alt="ID Back"
									className="rounded-lg border border-gray-200 w-full h-auto max-h-64 object-contain"
								/>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Bank Information Section */}
			<div className="w-full">
				<h4 className="text-4xl font-semibold mb-4 flex items-center gap-2">
					<CheckCircle className="text-green-500 !text-5xl" /> Bank Information
				</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<InfoItem label="Bank Name" value={formData.bankName} />
					<InfoItem label="Bank Branch" value={formData.bankBranch} />
					<InfoItem label="Account Number" value={formData.accountNumber} />
					<InfoItem label="Account Holder Name" value={formData.holderName} />
					<InfoItem label="Card Number" value={formData.cardNumber} />
					<InfoItem label="Expiration Date" value={formData.expirationDate} />
				</div>
			</div>

			{/* Security Information Section */}
			<div className="w-full">
				<h4 className="text-4xl font-semibold mb-4 flex items-center gap-2">
					<CheckCircle className="text-green-500 !text-5xl" /> Security Information
				</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<InfoItem label="Security Question" value={formData.securityQuestion} />
					<InfoItem label="Two-Factor Authentication" value={formData.twoFactorEnabled ? "Enabled" : "Disabled"} />
					<InfoItem label="Recovery Email" value={formData.recoveryEmail} />
				</div>
			</div>
		</div>
	);
};

// Helper component for displaying key-value pairs
const InfoItem = ({ label, value }: { label: string; value: string }) => (
	<div className="mb-2">
		<p className="text-gray-600 font-medium text-3xl">{label}</p>
		<p className="text-2xl normal-case mt-2 font-semibold">
			{value || <span className="text-gray-400">Not provided</span>}
		</p>
	</div>
);

export default ReviewInfo;
