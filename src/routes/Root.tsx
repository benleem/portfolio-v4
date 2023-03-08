import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Intro from "../components/Intro";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
	const location = useLocation();
	const [introActive, setIntroActive] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setIntroActive(!introActive);
		}, 1000);
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	if (introActive) {
		return <Intro />;
	}

	return (
		<>
			<Header />
			<main className="py-8 px-4 flex-grow z-10">
				<Outlet />
			</main>
			<h1 className="fixed bottom-0 right-0 z-0 px-4 py-8 w-min h-min text-9xl leading-9xl sm:text-[15rem] sm:leading-[15rem] text-mixed font-oswald font-bold opacity-[1.5%] tracking-wider capitalize rotate-180">
				{location.pathname === "/"
					? "home"
					: location.pathname.includes("work")
					? "work"
					: location.pathname.replace("/", "")}
			</h1>
			{/* <Footer /> */}
		</>
	);
};

export default Root;
