import React from "react";
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {BaseButton} from "../../../components";
import {Link} from "react-router-dom";
import {Block} from "../../../components";

const LoginForm = (props) => {
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		isSubmitting
	} = props;
	return (
		<>
			<div className="auth__top">
				<h2>Войти в аккаунт</h2>
				<p>Пожалуйста, войдите в свой аккаунт</p>
			</div>
			<Block>
				<Form
					name="normal_login"
					className="login-form"
					onSubmit={handleSubmit}
				>
					<Form.Item
						hasFeedback
						validateStatus={!touched.email ? "" :
							errors.email && touched.email ? "error" : "success"}
						help={!touched.email ? "" : errors.email}

					>
						<Input id="email"
							   placeholder="E-Mail"
							   style={{height: "56px"}}
							   value={values.email}
							   onChange={handleChange}
							   onBlur={handleBlur}
						/>

					</Form.Item>
					<Form.Item
						name="password"
						hasFeedback
						validateStatus={!touched.password ? "" :
							errors.password && touched.password ? "error" : "success"}
						help={!touched.password ? "" : errors.password}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon"/>}
							id="password"
							type="password"
							placeholder="Пароль"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							style={{height: "56px"}}
						/>
					</Form.Item>
					<Form.Item>
						<BaseButton props={{type: "primary", onClick: handleSubmit}} >Войти в аккаунт</BaseButton>
					</Form.Item>
					<Form.Item>
						<Link className="auth__register-link" to="/register">Зарегестрироваться</Link>
					</Form.Item>
				</Form>
			</Block>
		</>
	)
}

export default LoginForm;