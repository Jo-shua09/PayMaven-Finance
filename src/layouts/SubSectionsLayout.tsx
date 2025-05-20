import { ArrowRightAlt } from "@mui/icons-material";
import BlurText from "../components/animations/BlurText";

type SubSectionsLayoutProps = {
	image: string;
	title: string;
	description: string;
	buttonTitle: string;
	CTitle: string;
};

const SubSectionsLayout = ({ image, title, description, buttonTitle, CTitle }: SubSectionsLayoutProps) => {
	return (
		<div className="">
			<div className="w-full m-auto flex justify-center">
				<div
					data-aos="fade-left"
					className={`${
						CTitle == "manage" ? " flex-wrap" : "flex-wrap-reverse"
					} section-sec flex items-center md:flex-nowrap justify-center md:justify-between gap-x-20 gap-y-10 w-full`}
				>
					<div className={`${CTitle == "manage" ? "hidden" : "flex"}  md:flex-[3] w-full md:place-content-end`}>
						<img
							loading="lazy"
							src={image}
							loading="lazy"
							alt="Monitor payment image"
							data-aos="fade-up"
							className="md:w-[90%] w-full h-full shadow-2xl object-cover rounded-3xl"
						/>
					</div>

					<div className="w-full md:flex-[2] md:text-left text-center  flex-col flex gap-y-8">
						<div data-aos="fade-down" data-aos-delay="100" className="md:m-0 m-auto">
							<BlurText
								text="YOU CAN"
								delay={150}
								animateBy="words"
								direction="top"
								className="text-3xl font-semibold"
							/>
						</div>
						<h1 data-aos="fade-down" data-aos-delay="150" className="text-7xl font-head font-bold">
							<span className={`${CTitle == "manage" ? "text-secondary" : "text-pink-500"}`}>{CTitle} </span> {title}
						</h1>
						<p className="text-3xl font-normal normal-case" data-aos="fade-down" data-aos-delay="300">
							{description}
						</p>
						<button
							data-aos="fade-down"
							data-aos-delay="400"
							className={`${
								CTitle == "manage" ? "text-secondary" : "text-pink-500"
							} m-auto md:m-0 flex items-center gap-x-3 w-fit hover:tracking-widest capitalize font-semibold text-3xl`}
						>
							{buttonTitle} <ArrowRightAlt className="!text-5xl" />
						</button>
					</div>

					<div className={`${CTitle == "manage" ? "flex" : "hidden"}  md:flex-[3] w-full`}>
						<img
							loading="lazy"
							src={image}
							loading="lazy"
							alt="Monitor payment image"
							data-aos="fade-up"
							className="md:w-[90%] w-full h-full shadow-2xl object-cover rounded-3xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubSectionsLayout;
