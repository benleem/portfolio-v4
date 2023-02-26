import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error: any = useRouteError();

	return (
		<div className="h-full w-full grid place-content-center">
			<div className="flex flex-col items-center text-center">
				<h1 className="pb-4 text-5xl font-oswald tracking-wider">Oops!</h1>
				<p className="text-lg">Sorry, an unexpected error has occurred.</p>
				<p className="text-gray-400">
					{error.statusText || error.message}
					{" | "}
					<Link className="text-blue-500" to="/">
						Return
					</Link>
				</p>
			</div>
		</div>
	);
}
