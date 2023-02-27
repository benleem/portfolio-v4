import Anchor from "../components/Anchor";
import ImbeddedButton from "../components/ImbeddedButton";
import SocialLinks from "../components/SocialLinks";
import TitleText from "../components/TitleText";
import WorkFilterButton from "../components/Work/WorkFilterButton";
import WorkGrid from "../components/Work/WorkGrid";

const Work = () => {
	return (
		<section className="max-w-4xl mx-auto h-full flex flex-col animate-opacity-fade">
			<TitleText className="pb-8">Work</TitleText>
			<WorkGrid />
			<Anchor
				type="internal"
				link="/resume"
				className="my-8 flex gap-4 items-center [&>p]:hover:underline hover:no-underline"
			>
				<p className="underline-offset-2 decoration-emerald-400">
					Continue to resume
				</p>
				<span className="animate-horizontal-bounce text-emerald-400">
					{">"}
				</span>
			</Anchor>
			<SocialLinks />
		</section>
	);
};

export default Work;
