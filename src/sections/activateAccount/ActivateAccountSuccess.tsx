import ActivateAccountHeader from "../../layouts/ActivateAccountHeader";
import auth from "/src/assets/images/auth.svg";
import avatar from "/src/assets/images/avatar.svg";
import checked from "/src/assets/images/checked.svg";
import laptop from "/src/assets/images/laptop.svg";
import oval from "/src/assets/images/oval.svg";

const ActivateAccountSuccess = () => {
	return (
		<div className="w-full h-screen">
			<ActivateAccountHeader />
			<div className="w-full section h-full max-h-full">
				<div className="relative m-auto flex items-center border w-1/2 justify-center h-full">
					<img src={laptop} alt="" className="w-fit h-fit object-cover" />
					<img src={avatar} alt="" className="w-fit h-fit object-cover absolute top-1/3 left-[17rem]" />
					<img src={auth} alt="" className="w-fit h-fit object-cover absolute top-2/5 left-[10rem]" />
					<img
						src={checked}
						alt=""
						className="w-fit h-fit object-cover absolute top-[22rem] right-[19rem] rounded-full bg-[#f8f8f8] z-10 p-5"
					/>
				</div>
			</div>
		</div>
	);
};

export default ActivateAccountSuccess;
