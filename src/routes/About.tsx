import { Link } from "react-router-dom";
import Anchor from "../components/Anchor";
import SocialLinks from "../components/SocialLinks";
import TitleText from "../components/TitleText";

const skills = [
	"Git",
	"HTML",
	"CSS",
	"JavaScript",
	"jQuery",
	"TypeScript",
	"React",
	"NextJs",
];

const experiences = [
	{
		company: "Love Together",
		role: "🎨 Front End Developer",
		employmentType: "Contract",
		timeSpan: "November 2022 - Present",
		details: [
			"Created and maintained user interfaces (based on designs) for our web application, ensuring a consistent and user-friendly experience across all platforms.",
			"Contributed to the development of the company's internal design system, creating reusable components to improve development efficiency and consistency across projects.",
			"Collaborated with the back-end development team to integrate front-end code with back-end systems and services.",
			"Integrated authentication and authorization features into the web application, ensuring secure access for users.",
			"Integrated admin dashboard for the owner and other developers so they can perform CRUD operations on the database without having to exit the app.",
			"Assisted in handing the project off to a new group of developers.",
		],
	},
	{
		company: "Various Projects",
		role: "👷‍♂️ Developer",
		employmentType: "Projects",
		timeSpan: "Always - Forever",
		details: [
			"I am always taking on new projects to hone my skills. Check out my work page to view them!",
		],
	},
];

const About = () => {
	return (
		<section className="max-w-4xl mx-auto grid animate-opacity-fade">
			<TitleText>About Me</TitleText>
			<p className="py-8 text-gray-400">
				I am a front-end developer with a strong passion for all things
				technology. My interest in technology has led me to explore different
				tools and techniques that help me create unique and innovative projects.
				One tool that I have been particularly drawn to lately is DALL·E 2,
				which allows me to create amazing art using machine learning.
			</p>
			<p className="text-gray-400">
				When I am not coding, you can find me experimenting with new tools and
				techniques or somewhere outdoors. I am always looking for ways to expand
				my knowledge and push my boundaries.
			</p>
			<div className="flex pt-8">
				<div className="relative pr-2 h-full after:ml-[0.33rem] after:absolute after:block after:h-full after:w-[1px] after:bg-bone after:bg-opacity-10">
					<div className="p-1 border-2 border-bone rounded-full bg-[#1a191d]"></div>
				</div>
				<div className="pb-8 w-full">
					<div className="flex items-center justify-between">
						<h2 className="pb-2 text-xl text-emerald-400 font-oswald font-semibold tracking-wide">
							Skills 🛠
						</h2>
						<Anchor type="internal" link="/work" className="!underline">
							Work
						</Anchor>
					</div>
					<ul className="list-none flex gap-4 flex-wrap">
						{skills.map((skill) => (
							<li className="px-2 py-1 text-bone bg-slate-600 rounded-full">
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex">
				<div className="relative pr-2 h-full after:ml-[0.33rem] after:absolute after:block after:h-full after:w-[1px] after:bg-bone after:bg-opacity-10">
					<div className="p-1 border-2 border-bone rounded-full bg-[#1a191d]"></div>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<h2 className="pb-2 text-xl text-emerald-400 font-oswald font-semibold tracking-wide">
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
					<div className="flex flex-col gap-4">
						{experiences.map((experience) => (
							<div>
								<h3 className="text-lg font-medium">
									{experience.role} @{" "}
									<span className="text-emerald-400">{experience.company}</span>
								</h3>
								<p className="pb-2 text-sm text-gray-300">
									{experience.timeSpan} ({experience.employmentType})
								</p>
								<ul className="list-inside list-disc">
									{experience.details.map((detail) => (
										<li className="text-gray-400">{detail}</li>
									))}
								</ul>
							</div>
						))}
					</div>
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
