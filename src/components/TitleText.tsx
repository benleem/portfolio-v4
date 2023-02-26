type TitleTextProps = {
	className?: string;
	children: React.ReactNode;
};

const TitleText = ({ className, children }: TitleTextProps) => {
	return (
		<h1
			className={`text-6xl font-oswald tracking-wide font-bold ${
				className ? className : ""
			}`}
		>
			{children}
		</h1>
	);
};

export default TitleText;
