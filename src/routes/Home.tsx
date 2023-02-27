import { Link } from "react-router-dom";
import Anchor from "../components/Anchor";
import ImbeddedButton from "../components/ImbeddedButton";
import SocialLinks from "../components/SocialLinks";
import TitleText from "../components/TitleText";

function Home() {
	return (
		<section className="max-w-4xl mx-auto h-full grid place-content-center animate-opacity-fade">
			<TitleText className="pb-1">
				Hi! 👋 <br /> I'm Ben Marshall
			</TitleText>
			<h2 className="text-2xl text-emerald-400">
				Frontend developer and Javascript engineer
			</h2>
			<p className="py-8 text-gray-300">
				I'm passionate about creating seamless, user-friendly interfaces that
				bring ideas to life. I specialize in crafting responsive, accessible,
				and scalable web applications using cutting-edge technologies, including
				HTML, CSS, JavaScript, TypesScript, React, and NextJs.
			</p>
			<p className="text-gray-300">
				View my <ImbeddedButton text="Work" link="/work" /> ,{" "}
				<ImbeddedButton text="Resume" link="/resume" /> ,{" "}
				<ImbeddedButton text="Contact Me" link="/contact" /> , or send me an
				email at benmarshall.dev@gmail.com.
			</p>
			<Anchor
				type="internal"
				link="/about"
				className="my-8 flex gap-4 items-center [&>p]:hover:underline hover:no-underline"
			>
				<p className="underline-offset-2 decoration-emerald-400">
					See more about me
				</p>
				<span className="animate-horizontal-bounce text-emerald-400">
					{">"}
				</span>
			</Anchor>
			<SocialLinks />
		</section>
	);
}

export default Home;
