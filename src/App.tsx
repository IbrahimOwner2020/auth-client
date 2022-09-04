import React, { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { routes } from "./routes";

const App: FC = () => {
	return (
		<Suspense fallback={<p>loading...</p>}>
			<Routes>
				{routes.map((el, index) => (
					<Route
						path={el.path}
						key={index}
						element={<el.element />}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default App;
