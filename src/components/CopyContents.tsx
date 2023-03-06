import { useEffect, useState } from "react";

type CopyContentsProps = {
	text: string;
};

const CopyContents = ({ text }: CopyContentsProps) => {
	const [showAlert, setShowAlert] = useState(false);

	const handleClick = () => {
		navigator.clipboard.writeText(text); // copy to clipboard
		setShowAlert(true);
	};

	useEffect(() => {
		if (showAlert) {
			setTimeout(() => {
				setShowAlert(false);
			}, 1500);
		}
	}, [showAlert]);

	return (
		<button
			className="relative text-emerald-400 hover:text-bone transition-colors ease-in-out duration-300"
			onClick={() => handleClick()}
		>
			{text}
			<span
				className={`pointer-events-none px-1 py-0.5 ${
					showAlert ? "opacity-100" : "opacity-0"
				} min-w-max absolute -top-7 left-1/2 -translate-x-1/2 text-sm text-slate-700 bg-bone rounded after:tooltip-after transition-opacity ease-out duration-500`}
			>
				<p className="text-slate-700">copied ✅</p>
			</span>
		</button>
	);
};

export default CopyContents;
