import { Link, Outlet } from "react-router-dom";

export default function MonstersPage() {
	const monsters = [1, 2, 3, 4, 5];

	return (
		<div>
			<h1>MonstersPage</h1>
			<Link to="/">Home</Link> - <Link to="about">About</Link>
			<ul>
				{monsters.map((monster) => (
					<li key={monster}>
						<Link to={monster.toString()}>{monster}</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
}
