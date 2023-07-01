import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Root from "./Routes/root.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />

		<App />
	</React.StrictMode>
);
