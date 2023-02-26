type WorkFilterButtonProps = {
	text: string;
	underline: boolean;
	onClick: () => void;
};

const WorkFilterButton = ({
	text,
	underline,
	onClick,
}: WorkFilterButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`text-lg ${
				underline ? "underline" : ""
			} hover:underline underline-offset-2 decoration-emerald-400  font-semibold transition-colors ease-in-out duration-500`}
		>
			{text}
		</button>
	);
};

export default WorkFilterButton;
