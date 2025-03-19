import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";

export default function RootLayout() {
	return (
		<>
			<NavBar />
			<SearchBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
