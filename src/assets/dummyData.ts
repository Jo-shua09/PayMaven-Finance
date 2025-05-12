interface PricesProps {
	id: number;
	type: string;
	name: string;
	intro: string;
	service: string;
	payType: string;
	payDura: string;
	desc: string[];
	buttonText: string;
}

export const Prices: PricesProps[] = [
	{
		id: 1,
		type: "",
		name: "personal",
		intro: "Perfect for side or hobby projects",
		service: "4%",
		payType: "service fee",
		payDura: "payment",
		desc: ["Process Unlimited Payments", "Activate Three Business Services", "Analyze and Predict Financial Trends"],
		buttonText: "get started",
	},
	{
		id: 2,
		type: "popular",
		name: "start up",
		intro: "Perfect for small teams",
		service: "5%",
		payType: "service fee",
		payDura: "payment",
		desc: ["Process Unlimited Payments", "Activate Three Business Services", "Analyze and Predict Financial Trends"],
		buttonText: "get started",
	},
	{
		id: 1,
		type: "",
		name: "organization",
		intro: "Perfect for organizations",
		service: "$150",
		payType: "",
		payDura: "month",
		desc: ["Process Unlimited Payments", "Activate Three Business Services", "Analyze and Predict Financial Trends"],
		buttonText: "get started",
	},
];
