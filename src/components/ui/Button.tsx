import { Link } from "react-router-dom";

interface ButtonProps {
	name: string;
	linkPath: string;
}

const Button = ({ name, linkPath }: ButtonProps) => {
	return (
		<Link to={linkPath}>
			<button className="bg-secondary  text-nowrap capitalize text-white px-7 py-5 rounded-md cursor-pointer hover:scale-95 text-3xl font-semibold">
				{name}
			</button>
		</Link>
	);
};

const Button2 = ({ name, linkPath }: ButtonProps) => {
	return (
		<Link to={linkPath}>
			<button className="bg-primary  text-nowrap capitalize text-secondary px-7 py-5 rounded-md cursor-pointer hover:scale-95 text-3xl font-semibold">
				{name}
			</button>
		</Link>
	);
};
export { Button, Button2 };
