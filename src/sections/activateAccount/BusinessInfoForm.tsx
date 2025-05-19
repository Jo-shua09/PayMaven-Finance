import { Business } from "@mui/icons-material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface BusinessInfoFormProps {
	formData: {
		businessName: string;
		businessType: string;
		number: string;
		businessEmail: string;
		businessAddress: string;
		cityName: string;
		stateProvince: string;
		countryRegion: string;
	};
	onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | string) => void;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({ formData, onChange }) => {
	return (
		<div data-aos="fade-up" className="w-full space-y-8">
			<div className="w-full flex items-center gap-x-5">
				<Business className="!text-6xl p-3 rounded-xl bg-secondary text-white" />
				<span className="text-3xl font-semibold">business information</span>
			</div>

			<form className="w-full sm:grid-cols-2 grid-cols-1 gap-10 grid">
				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">business name</label>
					<input
						required
						type="text"
						name="businessName"
						value={formData.businessName}
						onChange={onChange}
						placeholder="Enter business name"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">business type</label>
					<select
						required
						name="businessType"
						value={formData.businessType || "select business type"}
						onChange={onChange}
						className="bg-tertiary cursor-pointer appearance-none focus:border border-secondary capitalize pl-5 text-[1.7rem] text-black font-semibold rounded-xl w-full h-[5.5rem]"
					>
						<option disabled value="select business type">
							select business type
						</option>
						<option value="individual" className="text-gray-700 font-medium">
							individual
						</option>
						<option value="partnership" className="text-gray-700 font-medium">
							partnership
						</option>
						<option value="limited liability company" className="text-gray-700 font-medium">
							limited liability company
						</option>
					</select>
				</div>

				<div className="w-full space-y-2">
					<label className="pl-1 text-[1.7rem] font-semibold">Phone number</label>
					<PhoneInput
						country={"us"}
						value={formData.number}
						onChange={onChange}
						containerClass="w-full"
						inputStyle={{ width: "100%", height: "5.5rem", background: "#BCC1CA" }}
						inputClass="mt-1 text-black font-medium text-base px-4 py-3 rounded-md placeholder:text-gray"
						placeholder="123 456 7890"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">business email</label>
					<input
						required
						type="email"
						name="businessEmail"
						value={formData.businessEmail}
						onChange={onChange}
						placeholder="Enter business email"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">business address</label>
					<input
						required
						type="text"
						name="businessAddress"
						value={formData.businessAddress}
						onChange={onChange}
						placeholder="Enter business address"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">city</label>
					<input
						required
						type="text"
						name="cityName"
						value={formData.cityName}
						onChange={onChange}
						placeholder="Enter city name"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">state/province</label>
					<input
						required
						type="text"
						name="stateProvince"
						value={formData.stateProvince}
						onChange={onChange}
						placeholder="Enter state/province"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">country/region</label>
					<input
						required
						type="text"
						name="countryRegion"
						value={formData.countryRegion}
						onChange={onChange}
						placeholder="Enter country/region"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
			</form>
		</div>
	);
};

export default BusinessInfoForm;
