import Banner from "../sections/landingPage/Banner";
import Hero from "../sections/landingPage/Hero";
import Manage from "../sections/landingPage/Manage";
import Monitor from "../sections/landingPage/Monitor";
import Pricing from "../sections/landingPage/Pricing";

const landingPage = () => {
	return (
		<div className="w-full">
			<Hero />
			<Monitor />
			<Manage />
			<Banner />
			<Pricing />
		</div>
	);
};

export default landingPage;
