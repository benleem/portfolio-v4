import { Link, useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();
	const navLinks = ["about", "work", "contact"];

	return (
		<header className="sticky top-0 left-0 px-4 w-full bg-[#1a191d] z-50">
			<nav className="py-4 flex justify-between items-center border-b-2 border-bone animate-opacity-fade">
				<div className="flex items-center font-oswald header-slide-start animate-header-slide">
					<Link
						className={`text-xl ${
							location.pathname === "/" ? "text-emerald-400" : "text-bone"
						} hover:text-emerald-400 font-medium tracking-wide transition-colors ease-in-out duration-400`}
						to="/"
					>
						BM
					</Link>
					<a href="https://github.com/benleem" target="_blank" className="mx-2">
						🐙
					</a>
					<a
						href="https://www.linkedin.com/in/benjamin-marshall-609906196/"
						target="_blank"
					>
						🔗
					</a>
				</div>
				<ul className="flex items-center gap-2">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className={`${
								location.pathname.includes(link)
									? "text-emerald-400"
									: "text-bone"
							} hover:text-emerald-400 header-slide-start animate-header-slide transition-colors ease-in-out duration-400`}
							style={{
								animationDelay: `${index * 0.1}s`,
								WebkitAnimationDelay: `${index * 0.1}s`,
								OAnimationDelay: `${index * 0.1}s`,
								MozAnimationDelay: `${index * 0.1}s`,
							}}
						>
							<Link to={`/${link}`}>{link}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
