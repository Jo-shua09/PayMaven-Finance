import Banner from "../sections/LandingPage/Banner";
import Hero from "../sections/LandingPage/Hero";
import Manage from "../sections/LandingPage/Manage";
import Monitor from "../sections/LandingPage/Monitor";

const LandingPage = () => {
	return (
		<div className="pb-[100rem]">
			<Hero />
			<Monitor />
			<Manage />
			<Banner />
		</div>
	);
};

export default LandingPage;
