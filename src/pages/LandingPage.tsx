import Banner from "../components/sections/landingPage/Banner";
import Hero from "../components/sections/landingPage/Hero";
import Manage from "../components/sections/landingPage/Manage";
import Monitor from "../components/sections/landingPage/Monitor";
import Pricing from "../components/sections/landingPage/Pricing";

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
