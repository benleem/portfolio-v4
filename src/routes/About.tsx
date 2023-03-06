import { Link } from "react-router-dom";
import Anchor from "../components/Anchor";
import SocialLinks from "../components/SocialLinks";
import TitleText from "../components/TitleText";

const About = () => {
	return (
		<section className="max-w-4xl mx-auto h-full grid place-content-center animate-opacity-fade">
			<TitleText>About Me</TitleText>
			<p className="py-8 text-gray-300">
				I am a front-end developer with a strong passion for all things
				technology. My interest in technology has led me to explore different
				tools and techniques that help me create unique and innovative projects.
				One tool that I have been particularly drawn to lately is DALL·E 2,
				which allows me to create amazing art using machine learning.
			</p>
			<p className="text-gray-300">
				When I am not coding, you can find me experimenting with new tools and
				techniques or somewhere outdoors. I am always looking for ways to expand
				my knowledge and push my boundaries.
			</p>
			<div className="flex pt-8">
				<div className="relative pr-2 h-full after:ml-[0.33rem] after:absolute after:block after:h-full after:w-[1px] after:bg-bone after:bg-opacity-10">
					<div className="p-1 border-2 border-bone rounded-full bg-[#1a191d]"></div>
				</div>
				<div className="pb-8">
					<div className="flex items-center justify-between">
						<h2 className="pb-2 text-lg text-emerald-400 font-oswald font-semibold tracking-wide">
							Skills 🛠
						</h2>
						<Anchor type="internal" link="/work" className="!underline">
							work
						</Anchor>
					</div>
					<p className="text-gray-300">
						When I am not coding, you can find me exploring the latest trends in
						tech or experimenting with new tools and techniques. I am always
						looking for ways to expand my knowledge and push my boundaries.
					</p>
				</div>
			</div>
			<div className="flex">
				<div className="relative pr-2 h-full after:ml-[0.33rem] after:absolute after:block after:h-full after:w-[1px] after:bg-bone after:bg-opacity-10">
					<div className="p-1 border-2 border-bone rounded-full bg-[#1a191d]"></div>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<h2 className="pb-2 text-lg text-emerald-400 font-oswald font-semibold tracking-wide">
							Experience 👨‍💻
						</h2>
						<Anchor
							type="external"
							link="https://www.linkedin.com/in/benjamin-marshall-609906196/"
							className="!underline"
						>
							LinkedIn
						</Anchor>
					</div>
					<p className="text-gray-300">
						When I am not coding, you can find me exploring the latest trends in
						tech or experimenting with new tools and techniques. I am always
						looking for ways to expand my knowledge and push my boundaries. When
						I am not coding, you can find me exploring the latest trends in tech
						or experimenting with new tools and techniques. I am always looking
						for ways to expand my knowledge and push my boundaries.When I am not
						coding, you can find me exploring the latest trends in tech or
						experimenting with new tools and techniques. I am always looking for
						ways to expand my knowledge and push my boundaries.
					</p>
				</div>
			</div>
			<Anchor
				type="internal"
				link="/work"
				className="my-8 flex gap-4 items-center [&>p]:hover:underline hover:no-underline"
			>
				<p className="underline-offset-2 decoration-emerald-400">
					Move on to work
				</p>
				<span className="animate-horizontal-bounce text-emerald-400">
					{">"}
				</span>
			</Anchor>
			<SocialLinks />
		</section>
	);
};

export default About;
