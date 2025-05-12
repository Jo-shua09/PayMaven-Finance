import { Button2 } from "../../components/ui/Button";
import hero from "/src/assets/images/hero_big.png";
import heroSmall from "/src/assets/images/hero_small.png";

const Hero = () => {
	return (
		<div className="w-full">
			<div className="section-sec py-32 flex items-center flex-wrap md:flex-nowrap justify-center  md:justify-between gap-10 w-full bg-secondary">
				<div className="w-full md:flex-[2] md:text-left text-center  flex-col flex gap-y-10 text-white">
					<h1 className="md:text-8xl text-7xl font-head font-bold">optimize business payments</h1>
					<p className="text-3xl font-medium text-primary normal-case">
						Payment processing platform that facilitates transactions between businesses and their customers.
					</p>
					<Button2 name="open account" linkPath="/" />
				</div>
				<div className="flex md:flex-[3] w-full relative">
					<img src={hero} alt="hero big image" className="lg:w-full w-[80%] m-auto h-full rounded-3xl brightness-95" />
					<img
						src={heroSmall}
						alt="hero small image"
						className="lg:w-[35rem] lg:h-[35rem] sm:w-[25rem] sm:h-[25rem] w-[14rem] h-[14rem] absolute lg:-bottom-16 lg:-left-32 -bottom-1 -left-2 object-cover rounded-3xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
