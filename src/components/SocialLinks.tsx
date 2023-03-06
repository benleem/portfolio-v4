import Anchor from "./Anchor";

type SocialLinksProps = {};

const SocialLinks = ({}: SocialLinksProps) => {
	return (
		<ul className="flex gap-4 text-sm">
			<Anchor type="external" link="https://github.com/benleem">
				🐙 Github
			</Anchor>
			<Anchor
				type="external"
				link="https://www.linkedin.com/in/benjamin-marshall-609906196/"
			>
				🔗 LinkedIn
			</Anchor>
			<Anchor type="external" link="mailto:benmarshall.dev@gmail.com">
				✉️ Email
			</Anchor>
		</ul>
	);
};

export default SocialLinks;
