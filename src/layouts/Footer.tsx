import { Facebook, Instagram, LinkedIn, MailOutlined, X } from "@mui/icons-material";

const Footer = () => {
	return (
		<div className="w-full mt-32">
			<div data-aos="flip-up" className="section-sec bg-primary w-full">
				<footer className="footer sm:footer-horizontal text-gray-900 text-2xl font-normal">
					<div data-aos="fade-right" data-aos-delay="100" className="flex gap-x-3 items-center">
						<img loading="lazy" src="logo.svg" loading="lazy" alt="logo image" className="w-16 h-16" />
						<span className="text-4xl font-semibold text-gray-900">PayMaven</span>
					</div>
					<nav data-aos="fade-right" data-aos-delay="150">
						<h6 className="footer-title text-4xl font-semibold font-head normal-case">Product</h6>
						<a className="link link-hover text-2xl mt-5">services </a>
						<a className="link link-hover text-2xl mt-5">solutions</a>
						<a className="link link-hover text-2xl mt-5">pricing</a>
					</nav>
					<nav data-aos="fade-right" data-aos-delay="200">
						<h6 className="footer-title text-4xl font-semibold font-head normal-case">Resources</h6>
						<a className="link link-hover text-2xl mt-5">blog</a>
						<a className="link link-hover text-2xl mt-5">user guides</a>
						<a className="link link-hover text-2xl mt-5">webinars</a>
					</nav>
					<nav data-aos="fade-right" data-aos-delay="250">
						<h6 className="footer-title text-4xl font-semibold font-head normal-case">Company</h6>
						<a className="link link-hover text-2xl mt-5">about</a>
						<a className="link link-hover text-2xl mt-5">join us</a>
					</nav>
					<nav data-aos="fade-right" data-aos-delay="300">
						<h6 className="footer-title text-4xl font-semibold font-head normal-case text-secondary">
							Subscribe to our newsletter
						</h6>
						<p className="text-2xl normal-case font-normal">For product announcements and exclusive insights</p>
						<div className="w-full flex items-center relative mt-5">
							<div className="relative w-full">
								<input
									type="email"
									name="email"
									placeholder="Input your email"
									className="rounded-l-xl bg-tertiary text-black normal-case focus:border-2 border-secondary text-2xl font-medium w-full h-[5rem] pl-14  sm:h-[4.5rem] "
								/>
								<MailOutlined className="!text-4xl absolute top-1/4 left-3" />
							</div>
							<button
								type="submit"
								className="bg-secondary capitalize text-white px-7 py-5 rounded-r-xl h-[5rem] sm:h-[4.5rem] cursor-pointer hover:tracking-wide text-2xl font-semibold"
							>
								Subscribe
							</button>
						</div>
					</nav>
				</footer>

				<footer className="footer text-black text-2xl font-normal mt-20 flex w-full justify-center flex-wrap sm:flex-nowrap items-center sm:justify-between gap-10 px-10 py-4">
					<aside className="w-full items-center text-2xl normal-case font-medium sm:place-content-start place-content-center">
						<p>
							© 2025 Brand, Inc. <span className="text-secondary font-bold">Tuma</span>.dev, All rights reserved
						</p>
					</aside>
					<nav className="w-full sm:place-content-end place-content-center">
						<div className="grid grid-flow-col gap-4">
							<X className="!text-4xl" />
							<Facebook className="!text-4xl" />
							<Instagram className="!text-4xl" />
							<LinkedIn className="!text-4xl" />
						</div>
					</nav>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
