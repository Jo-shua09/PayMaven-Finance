import ActivateAccountSidebar from "../layouts/ActivateAccountSidebar";
import ActivateAccountHeader from "../layouts/ActivateAccountHeader";

const ActivateAccount = () => {
	return (
		<div className="">
			<ActivateAccountHeader />
			<div className="flex items-center gap-10 section-sec">
				<div className="flex-[2] w-full">
					<ActivateAccountSidebar />
				</div>
				<div className="flex-[4] w-full"></div>
			</div>
		</div>
	);
};

export default ActivateAccount;
