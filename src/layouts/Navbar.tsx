import { Button } from "../components/ui/Button";

const Navbar = () => {
	return (
		<div className="w-full">
			<div className="flex items-center section justify-between w-full shadow-md gap-10 flex-wrap md:flex-nowrap">
				<div className="w-full gap-x-3 flex items-center">
					<img src="logo.svg" alt="logo image" className="w-16 h-16" />
					<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
				</div>

				<div className="flex w-full md:justify-center">
					<ul className="flex items-center gap-x-14">
						<li className="font-medium text-3xl cursor-pointer hover:text-purple-500 hover:underline underline-offset-4 text-gray-900">
							services
						</li>
						<li className="font-medium text-3xl cursor-pointer hover:text-purple-500 hover:underline underline-offset-4 text-gray-900">
							solutions
						</li>
						<li className="font-medium text-3xl cursor-pointer hover:text-purple-500 hover:underline underline-offset-4 text-gray-900">
							pricing
						</li>
						<li className="font-medium text-3xl cursor-pointer hover:text-purple-500 hover:underline underline-offset-4 text-gray-900">
							help center
						</li>
					</ul>
				</div>

				<div className="w-full flex gap-x-10 md:place-content-end">
					<button className="bg-primary capitalize text-purple-400 px-7 py-5 rounded-md cursor-pointer hover:scale-95 text-3xl font-semibold">
						login
					</button>
					<Button name="sign up" linkPath="/" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
