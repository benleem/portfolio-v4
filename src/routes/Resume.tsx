import Anchor from "../components/Anchor";
import TitleText from "../components/TitleText";

const Resume = () => {
	return (
		<section className="max-w-4xl mx-auto grid animate-opacity-fade">
			<TitleText>Resume</TitleText>
			<h2 className="py-8">
				<Anchor
					type="external"
					link="/Ben-Marshall-Resume.pdf"
					className="underline"
				>
					view
				</Anchor>{" "}
				or{" "}
				<Anchor
					type="external"
					link="/Ben-Marshall-Resume.pdf"
					download
					className="underline"
				>
					download
				</Anchor>{" "}
				resume
			</h2>
			<iframe
				className="aspect-[3/4]"
				src="/Ben-Marshall-Resume.pdf"
				width="100%"
			></iframe>
		</section>
	);
};

export default Resume;
