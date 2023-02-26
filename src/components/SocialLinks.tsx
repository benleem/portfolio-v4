type SocialLinksProps = {};

const SocialLinks = ({}: SocialLinksProps) => {
	return (
		<ul className="flex gap-4 text-sm">
			<a href="https://github.com/benleem" target="_blank">
				🐙 Github
			</a>
			<a
				href="https://www.linkedin.com/in/benjamin-marshall-609906196/"
				target="_blank"
			>
				🔗 LinkedIn
			</a>
			<a href="">✉️ Email</a>
		</ul>
	);
};

export default SocialLinks;
