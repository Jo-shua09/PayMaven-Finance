import manageImage from "/src/assets/images/manage_hero.jpg";
import SubSectionsLayout from "../../layouts/SubSectionsLayout";

const Manage = () => {
	return (
		<div className="">
			<SubSectionsLayout
				image={manageImage}
				CTitle="manage"
				title="customers"
				description="View real-time updates on successful payments, refunds, and other transaction-related activities"
				buttonTitle="learn more"
			/>
		</div>
	);
};

export default Manage;
