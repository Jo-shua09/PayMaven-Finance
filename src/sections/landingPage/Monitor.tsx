import monitorImage from "/src/assets/images/monitor_hero.jpg";
import SubSectionsLayout from "../../layouts/SubSectionsLayout";

const Monitor = () => {
	return (
		<div className="">
			<SubSectionsLayout
				image={monitorImage}
				CTitle="monitor"
				title="payments"
				description="View real-time updates on successful payments, refunds, and other transaction-related activities"
				buttonTitle="learn more"
			/>
		</div>
	);
};

export default Monitor;
