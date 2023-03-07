import { Link } from "react-router-dom";

type LinkProps = {
	type: "external" | "internal";
	link: string;
	children: React.ReactNode;
	className?: string;
};

const Anchor = ({ type, link, children, className }: LinkProps) => {
	return (
		<Link
			to={link}
			target={type === "external" ? "_blank" : "_self"}
			className={`text-bone hover:underline underline-offset-2 decoration-emerald-400 ${
				className ? className : ""
			}`}
		>
			{children}
		</Link>
	);
};

export default Anchor;
