const BusinessInfoForm = ({ formData, onChange }) => {
	return (
		<div className="border">
			<input
				type="text"
				name="businessName"
				value={formData.businessName}
				onChange={onChange}
				placeholder="Business Name"
				className="border p-2 w-full rounded h-[5rem]"
			/>
			<input
				type="text"
				name="businessAddress"
				value={formData.businessAddress}
				onChange={onChange}
				placeholder="Business Address"
				className="border p-2 w-full rounded"
			/>
		</div>
	);
};

export default BusinessInfoForm;
