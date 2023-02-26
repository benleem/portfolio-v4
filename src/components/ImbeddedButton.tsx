import { Link } from "react-router-dom";

type ImbeddedButtonProps = {
	text: string;
	link: string;
};

const ImbeddedButton = ({ text, link }: ImbeddedButtonProps) => {
	return (
		<Link
			to={link}
			className="py-0.5 px-1 bg-slate-700 hover:bg-emerald-400 text-bone hover:text-[#1a191d] font-medium rounded transition-colors ease-in-out duration-500"
		>
			{text}
		</Link>
	);
};

export default ImbeddedButton;
