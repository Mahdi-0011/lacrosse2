import { useSearchParams } from "react-router-dom";

export default function ResultsPage() {
	const [searchParams] = useSearchParams();

	console.log(searchParams.get("query"));

	return (
		<div>
			<h1>ResultsPage</h1>
		</div>
	);
}
