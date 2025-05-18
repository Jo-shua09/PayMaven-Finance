import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
	step: number;
	setStep: (val: number) => void;
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
				autoClose: 2000,
			});
		}
		setStep(nextStep);
	};

	const navigate = useNavigate();
	const handleNavigate = () => {
		toast.success("Account activated successfully !");
		setTimeout(() => navigate("/dashboard"), 2000);
	};

	return (
		<div className="flex items-center w-full justify-between place-content-end !mt-16 relative">
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
					className="bg-secondary flex absolute right-0  items-center gap-x-3 text-2xl capitalize font-semibold text-white px-9 py-6 hover:scale-95 rounded-md"
				>
					continue
					<ArrowForward className="!text-4xl" />
				</button>
			)}
			{step == 5 && (
				<button
					onClick={handleNavigate}
					className="bg-secondary flex items-center gap-x-3 text-2xl capitalize font-semibold text-white px-9 py-6 hover:scale-95 rounded-md"
				>
					finish
					<ArrowForward className="!text-4xl" />
				</button>
			)}
		</div>
	);
};

export default ActivateAccountFormNavigation;
