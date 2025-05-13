import { CheckCircle, CloseRounded } from "@mui/icons-material";
import { Prices } from "../../assets/dummyData";

console.log(Prices);

const Pricing = () => {
	return (
		<div className="w-full section-sec">
			<h1 className="text-8xl font-bold font-head text-center mb-16">pricing</h1>
			<div
				data-aos="fade-up"
				className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto gap-x-16 gap-y-10 justify-between items-center"
			>
				{Prices.map((price) => (
					<div
						data-aos="fade-right"
						data-aos-delay="50"
						key={price.id}
						className={`${price.type == "popular" ? "border-secondary border-2" : ""} text-center w-full rounded-2xl bg-primary px-10`}
					>
						<span
							className={`${
								price.type == "popular" ? "block" : "hidden"
							} text-2xl font-medium py-2 px-5 w-1/2 m-auto bg-secondary text-white rounded-b-2xl`}
						>
							{price.type}
						</span>
						<h2 className="text-5xl font-bold font-head uppercase mt-16">{price.name}</h2>
						<p className="text-3xl font-medium normal-case my-2">{price.intro}</p>
						<div className="flex items-center justify-center my-20">
							<h3 className="text-8xl font-bold font-head">{price.charge}</h3>
							<span className="text-2xl font-normal">
								{price.payType} <br />/{price.payDura}
							</span>
						</div>
						<div className="flex flex-col gap-y-3 w-full my-16">
							{price.desc.map((d, index) => (
								<div key={index} className="flex items-center gap-x-5">
									{price.charge === "4%" && index === 2 ? (
										<CloseRounded className="!text-5xl text-secondary" />
									) : (
										<CheckCircle className="!text-5xl text-secondary" />
									)}
									<span className="text-3xl font-normal normal-case">{d}</span>
								</div>
							))}
						</div>
						<button
							className={`${
								price.type == "popular" ? "bg-secondary text-white border-none" : ""
							} w-full bg-primary hover:scale-95 text-3xl mb-10 cursor-pointer border border-secondary text-secondary font-semibold py-6 px-7 rounded-xl capitalize`}
						>
							{price.buttonText}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;
