import { QuestionMark } from "@mui/icons-material";

const ActivateAccountHeader = () => {
	return (
		<div data-aos="fade-down" className="w-full fixed bg-white z-10 section shadow-md">
			<div className="w-full flex items-center py-5 justify-between">
				<div className="w-full gap-x-3 flex items-center">
					<img loading="lazy" src="logo.svg" alt="logo image" className="w-16 h-16" />
					<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
				</div>
				<QuestionMark className="!text-6xl p-3 rounded-full bg-primary cursor-pointer hover:bg-tertiary" />
			</div>
		</div>
	);
};

export default ActivateAccountHeader;
