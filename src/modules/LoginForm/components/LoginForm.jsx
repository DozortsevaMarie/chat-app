import React from "react";
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {BaseButton} from "../../../components";
import {Link} from "react-router-dom";
import {Block} from "../../../components";

const LoginForm = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};
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
					onFinish={onFinish}
				>
					<Form.Item
						hasFeedback
						validateStatus="success"
						name="username"
						rules={[
							{
								required: true,
								message: 'Введите логин!',
							},
						]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon"/>}
							   placeholder="Username"
							   style={{height: "56px"}}/>

					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Введите пароль!',
							},
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon"/>}
							type="password"
							placeholder="Password"
							style={{height: "56px"}}
						/>
					</Form.Item>
					<Form.Item>
						<BaseButton props={{type: "primary"}}>Войти в аккаунт</BaseButton>
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