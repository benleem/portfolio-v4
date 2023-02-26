import Anchor from "../components/Anchor";
import ImbeddedButton from "../components/ImbeddedButton";
import SocialLinks from "../components/SocialLinks";
import TitleText from "../components/TitleText";
import WorkFilterButton from "../components/Work/WorkFilterButton";
import WorkGrid from "../components/Work/WorkGrid";

const Work = () => {
	return (
		<section className="py-4 h-full max-w-4xl mx-auto flex flex-col animate-opacity-fade [&>ul]:pt-8">
			<TitleText className="pb-8">Work</TitleText>
			<WorkGrid />
			<SocialLinks />
		</section>
	);
};

export default Work;
