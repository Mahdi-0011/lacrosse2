import { useParams } from "react-router-dom";

export default function MonsterDetailsPage() {
	const params = useParams();

	return (
		<div>
			<h2>MonsterDetailsPage</h2>
			<p>Monster: {params.monsterid}</p>
		</div>
	);
}
