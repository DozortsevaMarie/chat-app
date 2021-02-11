import React from "react";
import './styles/index.scss';
import {Auth, Home} from "./pages";
import {Route} from "react-router";

function App(props) {
	return (
		<div className="wrapper">
			<Route exact path={["/", "/login", "/register"]} component={Auth} />
			<Route exact path={"/im"} component={Home} />
		</div>
	);
}

export default App;
