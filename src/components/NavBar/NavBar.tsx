import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
	const menuItems = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About" },
		{ to: "/monsters", label: "Monsters" },
		{ to: "/Contacts", label: "Contacts"}
	];

	const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
		return isActive ? "nav-link active" : "nav-link";
	};

	return (
		<header>
			<nav>
				{menuItems.map((item) => (
					<NavLink key={item.to} to={item.to} className={getLinkClassName}>
						{item.label}
					</NavLink>
				))}
			</nav>
		</header>
	);
}
