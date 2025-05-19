import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SecurityIcon from "@mui/icons-material/Security";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ActivateAccountStepper = ({ currentStep }: { currentStep: number }) => {
	const steps = [
		{ label: "Business Information", icon: <BusinessIcon />, step: 1 },
		{ label: "Personal Information", icon: <PersonIcon />, step: 2 },
		{ label: "Add bank account", icon: <AccountBalanceIcon />, step: 3 },
		{ label: "Secure account", icon: <SecurityIcon />, step: 4 },
		{ label: "Review", icon: <CheckCircleIcon />, step: 5 },
	];

	return (
		<div className="w-full md:flex-[2]">
			<div data-aos="fade-up" className="flex flex-col items-start space-y-4">
				{steps.map((item, index) => (
					<div key={index} className="flex items-start space-x-5">
						<div className="flex flex-col items-center">
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold ${
									currentStep >= item.step ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"
								}`}
							>
								{item.step}
							</div>
							{index < steps.length - 1 && <div className="h-10 w-px bg-gray-300 mt-1" />}
						</div>
						<div>
							<p
								className={`text-3xl font-medium text-nowrap ${
									currentStep >= item.step ? "text-black font-semibold" : "text-gray-400"
								}`}
							>
								{item.label}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActivateAccountStepper;
