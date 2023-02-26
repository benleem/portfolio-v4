import { Link } from "react-router-dom";

type LinkProps = {
	type: "external" | "internal";
	link: string;
	children: React.ReactNode;
	className?: string;
};

const Anchor = ({ type, link, children, className }: LinkProps) => {
	if (type === "internal") {
		return (
			<Link
				className={`text-bone hover:underline underline-offset-2 decoration-emerald-400 ${
					className ? className : ""
				}`}
				to={link}
			>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={link}
			target="_blank"
			className={`text-bone hover:underline underline-offset-2 decoration-emerald-400 ${
				className ? className : ""
			}`}
		>
			{children}
		</a>
	);
};

export default Anchor;
