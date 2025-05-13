import { useEffect, useState } from "react";
import { Button, Button2 } from "../components/ui/Button";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Close menu on scroll
	useEffect(() => {
		const handleScroll = () => setIsOpen(false);
		const handleResize = () => setIsMobile(window.innerWidth < 650);

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		// Initial check
		handleResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div data-aos="fade-down" className="w-full relative z-50">
			{isMobile ? (
				// Mobile Navbar
				<div className="relative">
					<div className="flex items-center section justify-between w-full z-50 gap-10 py-5">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="w-10 h-9 flex flex-col justify-between p-1 group"
							aria-label="Toggle menu"
						>
							<span
								className={`h-[4.5rem]  w-12 bg-black rounded-xl transition-all duration-300 ${
									isOpen ? "rotate-[43deg] translate-y-2" : ""
								}`}
							></span>
							<span className={`h-[.4rem]  w-7 bg-black rounded-xl transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
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
			) : (
				// Desktop Navbar
				<div className="flex items-center section justify-between py-5 gap-10 shadow-md">
					{/* Logo */}
					<div className="flex items-center gap-x-3">
						<img src="logo.svg" alt="logo" className="w-16 h-16" />
						<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
					</div>

					{/* Nav Links */}
					<ul className="flex items-center gap-x-14">
						{["services", "solutions", "pricing", "help center"].map((item) => (
							<li
								key={item}
								className="font-medium text-3xl cursor-pointer text-gray-900 hover:text-secondary hover:underline underline-offset-4"
							>
								{item}
							</li>
						))}
					</ul>

					{/* CTA Buttons */}
					<div className="flex gap-x-10">
						<Button2 name="login" linkPath="/" />
						<Button name="sign up" linkPath="/" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
