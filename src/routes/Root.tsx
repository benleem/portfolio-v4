import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Intro from "../components/Intro";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
	const [introActive, setIntroActive] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setIntroActive(!introActive);
		}, 1000);
	}, []);

	if (introActive) {
		return <Intro />;
	}

	return (
		<div className="h-full flex flex-col">
			<Header />
			<main className="p-4 flex-grow">
				<Outlet />
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Root;
