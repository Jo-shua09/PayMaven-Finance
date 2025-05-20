import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
	step: number;
	setStep: (val: number) => void;
	isSubmitting?: boolean;
	onSubmit?: () => Promise<boolean>;
};

const ActivateAccountFormNavigation: React.FC<Props> = ({ step, setStep, isSubmitting = false, onSubmit }) => {
	const navigate = useNavigate();

	const handleNext = () => {
		const nextStep = step + 1;
		const stepMessages = {
			2: "Business info saved, moving to personal Info.",
			3: "Personal info saved, let's add bank details.",
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

	const handleSubmit = async () => {
		if (!onSubmit) return;

		const success = await onSubmit();
		if (success) {
			toast.success("Account activated successfully!");
			setTimeout(() => navigate("/account-activated"), 2000);
		}
	};

	return (
		<div className="flex items-center w-full justify-between place-content-end !mt-16 relative">
			{step > 1 && (
				<button
					onClick={() => setStep(step - 1)}
					disabled={isSubmitting}
					className="bg-gray-200 flex items-center gap-x-3 text-2xl text-gray-700 capitalize font-semibold px-10 py-6 hover:scale-95 rounded-md disabled:opacity-50"
				>
					<ArrowBack className="!text-4xl" />
					Back
				</button>
			)}

			{step < 5 ? (
				<button
					onClick={handleNext}
					disabled={isSubmitting}
					className="bg-secondary flex absolute right-0 items-center gap-x-3 text-2xl capitalize font-semibold text-white px-9 py-6 hover:scale-95 rounded-md disabled:opacity-50"
				>
					Continue
					<ArrowForward className="!text-4xl" />
				</button>
			) : (
				<button
					onClick={handleSubmit}
					disabled={isSubmitting}
					className="bg-secondary flex items-center gap-x-3 text-2xl capitalize font-semibold text-white px-9 py-6 hover:scale-95 rounded-md disabled:opacity-50"
				>
					{isSubmitting ? (
						<>
							<span className="border-t-2 border-white rounded-full animate-spin h-6 w-6"></span>
							Submitting...
						</>
					) : (
						<>
							Finish
							<ArrowForward className="!text-4xl" />
						</>
					)}
				</button>
			)}
		</div>
	);
};

export default ActivateAccountFormNavigation;
