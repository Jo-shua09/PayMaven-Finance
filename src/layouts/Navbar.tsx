import { useEffect, useState } from "react";
import { Button, Button2 } from "../components/ui/Button";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			setIsOpen(false);
		};
	});
	return (
		<div className="w-full ">
			{window.screen.width < 650 ? (
				// Desktop Menu
				<div data-aos="fade-down" className="flex items-center section justify-between w-full shadow-md gap-10 flex-wrap md:flex-nowrap">
					<div className="w-full gap-x-3 flex items-center">
						<img src="logo.svg" loading="lazy" alt="logo image" className="w-16 h-16" />
						<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
					</div>

					<div className="flex w-full md:justify-center">
						<ul className="flex items-center gap-x-14">
							<li className="font-medium text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								services
							</li>
							<li className="font-medium text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								solutions
							</li>
							<li className="font-medium text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								pricing
							</li>
							<li className="font-medium text-nowrap text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								help center
							</li>
						</ul>
					</div>

					<div className="w-full flex gap-x-10 md:place-content-end">
						<Button2 name="login" linkPath="/" />
						<Button name="sign up" linkPath="/" />
					</div>
				</div>
			) : (
				// Mobile Menu
				<div className="relative">
					<div data-aos="fade-down" className="flex items-center section justify-between w-full z-50 gap-10 py-5">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="w-10 h-9 flex flex-col justify-between p-1 group"
							aria-label="Toggle menu"
						>
							<span
								className={`h-2  w-12 bg-black rounded-xl transition-all duration-300 ${isOpen ? "rotate-[43deg] translate-y-2" : ""}`}
							></span>
							<span className={`h-2  w-7 bg-black rounded-xl transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
							<span
								className={`h-2  w-12 bg-black rounded-xl transition-all duration-300 ${isOpen ? "-rotate-[43deg] -translate-y-2" : ""}`}
							></span>
						</button>

						<div className="w-full gap-x-3 flex items-center">
							<img src="logo.svg" loading="lazy" alt="logo image" className="w-16 h-16" />
							<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
						</div>

						<div className="w-full flex gap-x-10 place-content-end ">
							<Button name="sign up" linkPath="/sign-up" />
						</div>
					</div>

					{isOpen && (
						<ul data-aos="fade-up" className="flex inset-0 bg-[#f8f8f8] h-screen justify-center flex-col items-center space-y-10">
							<li className="font-medium text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								services
							</li>
							<li className="font-medium text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								solutions
							</li>
							<li className="font-medium text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								pricing
							</li>
							<li className="font-medium text-nowrap text-3xl cursor-pointer hover:text-secondary hover:underline underline-offset-4 text-gray-900">
								help center
							</li>
						</ul>
					)}
				</div>
			)}
		</div>
	);
};

export default Navbar;
