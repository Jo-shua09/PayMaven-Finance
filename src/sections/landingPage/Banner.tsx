import DecryptedText from "../../components/animations/DecryptedText";

const Banner = () => {
	return (
		<div className="w-full section-sec">
			<div data-aos="fade-up" className="w-full flex py-32 items-center gap-16 flex-col justify-center bg-primary rounded-2xl">
				<div className="m-auto flex items-center justify-center lg:w-[45%] w-[80%] place-content-center">
					<DecryptedText
						text="Simplify your business payments with our intuitive tool. Manage, track, and  optimize your financial transactions effortlessly.
					Take control of your finances and focus on growing your business."
						speed={200}
						maxIterations={20}
						characters="ABCD1234!?"
						className="revealed font-medium normal-case text-3xl"
						parentClassName="all-letters"
						encryptedClassName="encrypted"
						animateOn="view"
						revealDirection="center"
					/>
				</div>
				<button className="bg-pink-500 capitalize text-white px-7 py-5 rounded-md cursor-pointer hover:scale-95 text-3xl font-semibold">
					open account
				</button>
			</div>
		</div>
	);
};

export default Banner;
