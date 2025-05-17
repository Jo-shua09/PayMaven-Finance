import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { toast } from "react-toastify";

type Props = {
	step: number;
	setStep: (val: number) => void;
	showToast?: boolean;
};

const ActivateAccountFormNavigation: React.FC<Props> = ({ step, setStep }) => {
	const handleNext = () => {
		const nextStep = step + 1;
		const stepMessages = {
			2: "Business info saved, moving to Owner Info.",
			3: "Owner info saved, let's add bank details.",
			4: "Bank info saved, now secure your account.",
			5: "Account secured, time to review everything.",
		};
		if (stepMessages[nextStep as keyof typeof stepMessages]) {
			toast.success(stepMessages[nextStep as keyof typeof stepMessages], {
				autoClose: 1500,
			});
		}
		setStep(nextStep);
	};

	return (
		<div className="flex items-center space-x-10 place-content-end !mt-10">
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
					onClick={handleNext}
					className="bg-secondary flex items-center gap-x-3 text-2xl capitalize font-semibold text-white px-5 py-6 hover:scale-95 rounded-md"
				>
					continue
					<ArrowForward className="!text-4xl" />
				</button>
			)}
		</div>
	);
};

export default ActivateAccountFormNavigation;
