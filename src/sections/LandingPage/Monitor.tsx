import { ArrowRightAlt } from "@mui/icons-material";
import monitorImage from "/src/assets/images/monitor_hero.jpg";

const Monitor = () => {
	return (
		<div className="">
			<div className="w-full m-auto flex justify-center">
				<div
					data-aos="fade-left"
					className="section-sec  flex items-center flex-wrap-reverse md:flex-nowrap justify-center md:justify-between gap-10 w-full"
				>
					<div className="flex md:flex-[3] w-full place-content-end">
						<img
							src={monitorImage}
							loading="lazy"
							alt="Monitor payment image"
							data-aos="fade-up"
							className="w-[90%] h-full shadow-2xl object-cover rounded-3xl"
						/>
					</div>

					<div className="w-full md:flex-[2] md:text-left text-center  flex-col flex gap-y-10">
						<h1 data-aos="fade-down" data-aos-delay="150" className="text-7xl font-head font-bold">
							<span className="text-pink-500">Monitor </span> payments
						</h1>
						<p className="text-3xl font-normal normal-case" data-aos="fade-down" data-aos-delay="300">
							Payment processing platform that facilitates transactions between businesses and their customers.
						</p>
						<button
							data-aos="fade-down"
							data-aos-delay="400"
							className="text-pink-500 m-auto md:m-0 flex items-center gap-x-3 w-fit hover:tracking-widest capitalize font-semibold text-3xl"
						>
							learn more <ArrowRightAlt className="!text-5xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Monitor;
