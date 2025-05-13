interface PricesProps {
	id: number;
	type: string;
	name: string;
	intro: string;
	charge: string;
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
		charge: "4%",
		payType: "service fee",
		payDura: "payment",
		desc: ["Process Unlimited Payments", "Activate Three Business Services", " Analyze and Predict Financial Trends"],
		buttonText: "get started",
	},
	{
		id: 2,
		type: "popular",
		name: "start up",
		intro: "Perfect for small teams",
		charge: "5%",
		payType: "service fee",
		payDura: "payment",
		desc: ["Process Unlimited Payments", "Activate Three Business Services", "Analyze and Predict Financial Trends"],
		buttonText: "get started",
	},
	{
		id: 3,
		type: "",
		name: "organization",
		intro: "Perfect for organizations",
		charge: "$150",
		payType: "",
		payDura: "month",
		desc: ["Process Unlimited Payments", "Activate Three Business Services", "Analyze and Predict Financial Trends"],
		buttonText: "get started",
	},
];
