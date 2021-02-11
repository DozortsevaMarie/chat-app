import React from "react";
import "./Auth.scss";
import {LoginForm, RegisterForm} from "../../modules/index";
import {Route} from "react-router";


const Auth = () => {
	return (
		<section className="auth">
			<div className="auth__content">
				<Route exact path={["/", "/login"]} component={LoginForm} />
				<Route path="/register" component={RegisterForm} />
			</div>
		</section>
	)
}

export default Auth;