type PillTagProps = { text: string; className?: string };

const PillTag = ({ text, className }: PillTagProps) => {
	return (
		<span
			className={`min-w-max px-2 py-1 bg-slate-600 rounded-full ${className}`}
		>
			{text}
		</span>
	);
};

export default PillTag;
