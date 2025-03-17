import { Link } from "react-router-dom";

export default function AboutPage() {
	return (
		<div>
			<h1>AboutPage</h1>
			<Link to="/">Home</Link> - <Link to="/monsters">Monsters</Link>
		</div>
	);
}
