import { useEffect, useState } from "react";
import WorkFilterButton from "./WorkFilterButton";

import * as worksJson from "../../assets/works.json";
import { Link } from "react-router-dom";
import Anchor from "../Anchor";

type Work = {
	id: string;
	type: "job" | "project";
	title: string;
	description: string;
	tags: string[];
	image: string;
	redirect: string;
	live?: string;
	code?: string;
};

const WorkGrid = () => {
	const worksArray: Work[] = worksJson.worksArray as Work[];
	const [works, setWorks] = useState<Work[]>(worksArray);
	const [filter, setFilter] = useState<string>("all");

	useEffect(() => {
		if (filter !== "all") {
			setWorks(worksArray.filter((work) => work.type === filter));
		} else {
			setWorks(worksArray);
		}
	}, [filter]);

	return (
		<div className="w-full ">
			<div className="pb-4 flex gap-8">
				<WorkFilterButton
					text="All"
					underline={filter === "all" ? true : false}
					onClick={() => setFilter("all")}
				/>
				<WorkFilterButton
					text="Jobs"
					underline={filter === "job" ? true : false}
					onClick={() => setFilter("job")}
				/>
				<WorkFilterButton
					text="Projects"
					underline={filter === "project" ? true : false}
					onClick={() => setFilter("project")}
				/>
			</div>
			<div
				key={filter}
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-works-slide"
			>
				{works.map((work: Work) => (
					<div
						key={work.id}
						className="group relative h-96 rounded-lg overflow-hidden"
					>
						<img
							className="absolute top-0 left-0 w-full h-full object-cover"
							src={work.image}
							alt={work.title}
						/>
						<div className="p-4 h-full w-full absolute top-0 left-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
							<div className="group-hover:animate-work-slide">
								<p className="text-2xl font-oswald font-bold">{work.title}</p>
								<p className="font-light py-2">{work.description}</p>
								<div className="flex gap-2 flex-wrap">
									{work.tags.map((tag) => (
										<span className="min-w-max p-2 py-1 bg-slate-500 rounded-full text-sm">
											{tag}
										</span>
									))}
								</div>
								{/* <Link to={`/work/${work.id}`}>More...</Link> */}
								<div className="pt-2 flex gap-2">
									{work.live ? (
										<Anchor
											type="external"
											link={work.live}
											className="!text-xs"
										>
											🔴 Live
										</Anchor>
									) : (
										<></>
									)}
									{work.code ? (
										<Anchor
											type="external"
											link={work.code}
											className="!text-xs"
										>
											🐙 Github
										</Anchor>
									) : (
										<></>
									)}
									<Anchor
										type="internal"
										link={`/work/${work.id}`}
										className="!text-xs"
									>
										More...
									</Anchor>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WorkGrid;
