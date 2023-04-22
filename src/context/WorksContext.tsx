import type { Work } from "../models/works";
import React, { createContext, useContext } from "react";

type WorksContextProps = {
	works: Work[];
};

const WorksContext = createContext<WorksContextProps>({
	works: [],
});

export const useWorksContext = () => useContext(WorksContext);

type WorksProviderProps = {
	children?: React.ReactNode;
};

export const WorksProvider: React.FC<WorksProviderProps> = ({ children }) => {
	const works: Work[] = [
		{
			id: "love-together",
			type: "job",
			jobInfo: {
				company: "Love Together",
				role: "🎨 Front End Developer",
				employmentType: "Contract",
				timeSpan: "November 2022 - March 2023",
			},
			title: "Love Together",
			description:
				"Love Together is a relationship coaching app. Answer survey questions, match with a partner, and discuss!",
			about: [
				"While at Love Together, I spearheaded front end development. I developed and maintained user interfaces for our web application, ensuring a consistent and user-friendly experience across all platforms. I also contributed to the development of the company's internal design system, creating reusable components to improve development efficiency and consistency across projects. Some examples include reusable input fields, a modal wrapper, and a multi step form. Additionally, I collaborated with the back-end development team to integrate front-end code with back-end systems and services.",
			],
			tags: [
				"TypeScript",
				"NextJs",
				"Tailwind",
				"React Query",
				"React Context",
			],
			src: "https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677528976/portfolio/love-together_zkbqt3.webp 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528976/portfolio/love-together_zkbqt3.webp 1000w",
			fallback:
				"https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677528086/portfolio/love-together_zkbqt3.png 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528086/portfolio/love-together_zkbqt3.png 1000w",
			placeholder:
				"https://res.cloudinary.com/ben-dev/image/upload/e_blur:1000,q_1,f_auto/v1677528086/portfolio/love-together_zkbqt3.png",
			redirect: "/work/love-together",
			live: "https://www.love-together.com/",
		},
		{
			id: "chirp",
			type: "project",
			title: "Chirp",
			description:
				"Chirp is a social media platform. Keep up with people from around the globe, or just post funny memes.",
			about: [
				"The purpose of this social media project was to learn a new framework, NextJs. Another reason was to expose myself to a big project so I could build common things you find on a lot of websites(auth, infinite scrolling, CRUD capability, etc). What really made me spark an interest in making a social media project, was that I originally wanted a place to share recipes and beers with friends. I worked on it for a while, scrapped it, and turned it into Chirp instead!",
				"I have learned a lot from this project and have grown as a developer. I've also had plenty of road bumps along the way. Although I've had a love-hate relationship with this project I still want to add more. If time permits, I would love to integrate a proper search engine like algolia and also a favorites page!",
				"Test login - ",
				"email: testuser@gmail.com",
				"password: password",
			],
			tags: ["JavaScript", "NextJs", "CSS Modules", "React Context"],
			src: "https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677528976/portfolio/chirp_nlrbd5.webp 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528976/portfolio/chirp_nlrbd5.webp 1000w",
			fallback:
				"https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677528086/portfolio/chirp_nlrbd5.png 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528086/portfolio/chirp_nlrbd5.png 1000w",
			placeholder:
				"https://res.cloudinary.com/ben-dev/image/upload/e_blur:1000,q_1,f_auto/v1677528086/portfolio/chirp_nlrbd5.png",
			redirect: "/work/chirp",
			live: "https://chirp-social.vercel.app/",
			code: "https://github.com/benleem/chirp",
		},
		{
			id: "goggle-earth",
			type: "project",
			title: "Goggle Earth",
			description:
				"Goggle Earth is an application that can be used to satisfy your curiosity about our great blue planet! Place a pin, and info related to that place will show up in the info tab.",
			about: [
				"The purpose of building Goggle Earth was to refine my front-end skills as well as to learn libraries such as ThreeJs and Framer Motion. Although it was originally supposed to be a play project for testing ThreeJs features, it quickly became much more. I got sucked into all the possibilities of ThreeJs and decided to make it an app with functionality reminiscent of Google Earth.",
				"Although this easily became my favorite project to date, I did come across challenges aplenty. For example, I had no experience with 3D development and had to scour docs, videos, and other projects to get a proper footing to start development.",
			],
			src: "https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677532380/earth_orgnqh.webp 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528976/portfolio/earth_orgnqh.webp 1000w",
			fallback:
				"https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677528086/portfolio/earth_orgnqh.png 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528086/portfolio/earth_orgnqh.png 1000w",
			placeholder:
				"https://res.cloudinary.com/ben-dev/image/upload/e_blur:1000,q_1,f_auto/v1677528086/portfolio/earth_orgnqh.png",
			tags: ["JavaScript", "React", "CSS", "ThreeJs"],
			redirect: "/work/goggle-earth",
			live: "https://goggle-earth.netlify.app/",
			code: "https://github.com/benleem/threejs-test",
		},
		{
			id: "landing-page",
			type: "project",
			title: "Landing Page",
			description:
				"A landing page I received from a spotify newsletter campaign remade in HTML, CSS, and JavaScript",
			about: [
				"This project is just a simple landing page to practice my design to code skills.",
			],
			src: "https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677528976/portfolio/landing_s9zj3p.webp 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528976/portfolio/landing_s9zj3p.webp 1000w",
			fallback:
				"https://res.cloudinary.com/ben-dev/image/upload/w_500,c_fill/v1677528086/portfolio/landing_s9zj3p.png 500w, https://res.cloudinary.com/ben-dev/image/upload/w_1000,c_fill/v1677528086/portfolio/landing_s9zj3p.png 1000w",
			placeholder:
				"https://res.cloudinary.com/ben-dev/image/upload/e_blur:1000,q_1,f_auto/v1677528086/portfolio/landing_s9zj3p.png",
			tags: ["HTML", "CSS", "JavaScript"],
			redirect: "/work/landing-page",
			live: "https://htmlpreview.github.io/?https://github.com/benleem/landingpage/blob/main/index.html",
			code: "https://github.com/benleem/landingpage",
		},
	];

	return (
		<WorksContext.Provider value={{ works }}>{children}</WorksContext.Provider>
	);
};
