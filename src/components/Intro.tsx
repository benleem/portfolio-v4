const Intro = () => {
	return (
		<main
			className="h-full w-full fixed top-0 left-0 grid place-content-center animate-opacity-fade"
			style={{ animationDirection: "reverse" }}
		>
			<p className="text-xl text-center">Ben Marshall</p>
			<h1 className="text-5xl text-center font-oswald font-semibold">
				Frontend Web Developer
			</h1>
		</main>
	);
};

export default Intro;
