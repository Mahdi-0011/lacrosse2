import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`/results?query=${encodeURIComponent(searchTerm)}`);
		setSearchTerm("");
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={handleChange}
				/>
				<button>Search</button>
			</form>
		</div>
	);
}
