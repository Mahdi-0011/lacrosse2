import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<div>
			<h1>HomePage</h1>
			<Link to="about">About</Link> - <Link to="/monsters">Monsters</Link>
		</div>
	);
}
