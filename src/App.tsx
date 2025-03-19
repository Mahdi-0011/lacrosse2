import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import MonstersPage from "./routes/MonstersPage";
import MonsterDetailsPage from "./routes/MonsterDetailsPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{
				path: "monsters",
				element: <MonstersPage />,
				children: [
					{
						path: "/monsters/:monsterid",
						element: <MonsterDetailsPage />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
