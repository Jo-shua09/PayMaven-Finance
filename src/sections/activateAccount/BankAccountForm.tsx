import { AccountBalance, AccountBalanceWalletTwoTone, AccountBoxTwoTone } from "@mui/icons-material";
import visaCard from "/src/assets/images/visa_logo.png";
import masterCard from "/src/assets/images/mastercard_logo.png";

interface BankAccountFormProps {
	formData: {
		bankName: string;
		bankBranch: string;
		accountNumber: number;
		holderName: string;
		cardNumber: number;
		expirationDate: number;
		cvv: number;
	};
	onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | string) => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({ formData, onChange }) => {
	return (
		<div data-aos="fade-up" className="w-full space-y-8">
			<div className="w-full flex items-center gap-x-5">
				<AccountBalance className="!text-6xl p-3 rounded-xl bg-secondary text-white" />
				<span className="text-3xl font-semibold">business account</span>
			</div>

			<form className="w-full sm:grid-cols-2 grid-cols-1 gap-10 grid">
				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">bank name</label>
					<input
						required
						type="text"
						name="bankName"
						value={formData.bankName}
						onChange={onChange}
						placeholder="Enter bank name"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">bank branch</label>
					<input
						required
						type="text"
						name="bankBranch"
						value={formData.bankBranch}
						onChange={onChange}
						placeholder="Enter bank branch"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">account number</label>
					<input
						required
						type="text"
						name="accountNumber"
						value={formData.accountNumber}
						onChange={onChange}
						placeholder="Enter account number"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold"> confirm account number</label>
					<input
						required
						type="text"
						name="confirmAccountNumber"
						value={formData.accountNumber}
						onChange={onChange}
						placeholder="Enter account number"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
			</form>

			<div className="w-full flex items-center gap-x-5 !mt-28">
				<AccountBoxTwoTone className="!text-6xl p-3 rounded-xl bg-secondary text-white" />
				<span className="text-3xl font-semibold"> personal account</span>{" "}
				<span className="ml-2 py-1 px-5 rounded-2xl text-red-700 bg-red-300 text-2xl">optional</span>
			</div>

			<div className="w-full flex items-center gap-10">
				<div className="flex items-center gap-x-5 w-full border bg-primary rounded-xl p-5 cursor-pointer">
					<input type="radio" name="cardType" value="visa" className="ml-2 accent-secondary cursor-pointer" />
					<img src={visaCard} alt="" className="w-fit h-fit object-cover" />
					<img src={masterCard} alt="" className="w-fit h-fit object-cover" />
				</div>

				<div className="flex items-center gap-x-5 w-full border pl-2 bg-primary rounded-xl p-5 cursor-pointer">
					<input type="radio" name="cardType" value="visa" className="ml-2 accent-secondary cursor-pointer" />
					<AccountBalanceWalletTwoTone className="!text-6xl text-secondary " />
				</div>
			</div>

			<form className="w-full sm:grid-cols-2 grid-cols-1 gap-10 grid">
				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">name on card</label>
					<input
						required
						type="text"
						name="holderName"
						value={formData.holderName}
						onChange={onChange}
						placeholder="Enter name on card"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">card number</label>
					<input
						required
						type="text"
						name="cardNumber"
						value={formData.cardNumber}
						onChange={onChange}
						placeholder="Enter card number"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold">expiration date</label>
					<input
						required
						type="text"
						name="expirationDate"
						value={formData.expirationDate}
						onChange={onChange}
						placeholder="Enter expiration date"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>

				<div className="w-full space-y-2">
					<label className="text-[1.7rem] font-semibold"> CVV </label>
					<input
						required
						type="text"
						name=" cvv"
						value={formData.cvv}
						onChange={onChange}
						placeholder="Enter CVV"
						className="bg-tertiary normal-case focus:border border-secondary pl-5 text-[1.7rem] text-black font-semibold placeholder:text-gray-600 rounded-xl w-full h-[5.5rem]"
					/>
				</div>
			</form>
		</div>
	);
};

export default BankAccountForm;
