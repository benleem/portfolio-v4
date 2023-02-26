import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";
import Contact from "./routes/Contact";
import "./index.css";
import WorkId from "./routes/WorkId";
import Resume from "./routes/Resume";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "work",
				element: <Work />,
			},
			{
				path: "work/:workId",
				element: <WorkId />,
			},
			{
				path: "resume",
				element: <Resume />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
