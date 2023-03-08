import { useLocation } from "react-router-dom";
import TitleText from "../components/TitleText";
import { Work } from "../models/works";

import * as worksJson from "../assets/works.json";
import PillTag from "../components/PillTag";
import Image from "../components/Image";
import Anchor from "../components/Anchor";

const WorkId = () => {
	const location = useLocation();
	const worksArray = worksJson.worksArray.filter(
		(work) => work.id === location.pathname.replace("/work/", "")
	);
	const currentWork: Work = worksArray[0] as Work;

	return (
		<section className="max-w-4xl mx-auto h-full flex flex-col animate-opacity-fade">
			<TitleText>{currentWork.title}</TitleText>
			{currentWork.jobInfo ? (
				<>
					<p className="pt-2 text-lg font-medium">
						{currentWork.jobInfo.role} @{" "}
						<span className="text-emerald-400">
							{currentWork.jobInfo.company}
						</span>
					</p>
					<p className="text-sm text-gray-300">
						{currentWork.jobInfo.timeSpan} ({currentWork.jobInfo.employmentType}
						)
					</p>
				</>
			) : null}
			<p className="py-8 text-gray-400">{currentWork.description}</p>
			<Image
				src={currentWork.src}
				fallback={currentWork.fallback}
				placeholder={currentWork.placeholder}
				alt={currentWork.title}
				className="w-full"
			/>
			<div className="py-8">
				<h2 className="text-lg font-oswald font-medium">About</h2>
				<div className="flex flex-col gap-2">
					{currentWork.about.map((aboutParagraph, index) => (
						<p key={index} className="text-gray-400">
							{aboutParagraph}
						</p>
					))}
				</div>
			</div>
			<div className="pb-8">
				<h2 className="pb-2 text-lg font-oswald font-medium">Technologies</h2>
				<ul className="list-none flex gap-4 flex-wrap">
					{currentWork.tags.map((tag, index) => (
						<li key={tag + index}>
							<PillTag text={tag} />
						</li>
					))}
				</ul>
			</div>
			<div>
				<h2 className="text-lg font-oswald font-medium">Live</h2>
				<Anchor
					type="external"
					link={currentWork.live as string}
					className="!text-gray-400"
				>
					{currentWork.live}
				</Anchor>
			</div>
			{currentWork.code ? (
				<div className="pt-8">
					<h2 className="text-lg font-oswald font-medium">GitHub</h2>
					<Anchor
						type="external"
						link={currentWork.code as string}
						className="!text-gray-400"
					>
						{currentWork.code}
					</Anchor>
				</div>
			) : null}
		</section>
	);
};

export default WorkId;
