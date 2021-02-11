import React, {useState} from "react";
import {Block} from "../../../components";
import {Form, Input} from "antd";
import {BaseButton} from "../../../components";
import {Link} from "react-router-dom";
import {InfoCircleTwoTone} from '@ant-design/icons';


const RegisterForm = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};
	const [success, setSuccess] = useState(true);
	return (
		<>
			<div className="auth__top">
				<h2>Регистрация</h2>
				<p>Для входа в чат, вам нужно зарегистрироваться</p>
			</div>
			<Block>
				{!success ? (<Form
						name="normal_login"
						className="login-form"
						onFinish={onFinish}
					>
						<Form.Item
							hasFeedback
							validateStatus="success"
							rules={[
								{
									required: true,
									message: 'Введите E-Mail',
								},
							]}
						>
							<Input placeholder="E-Mail"
								   style={{height: "56px"}}/>

						</Form.Item>
						<Form.Item
							hasFeedback
							validateStatus="success"
							rules={[
								{
									required: true,
									message: 'Введите ваше имя',
								},
							]}
						>
							<Input placeholder="Ваше имя"
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
							<Input type="password"
								   placeholder="Пароль"
								   style={{height: "56px"}}
							/>
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
							<Input type="password"
								   placeholder="Повторить пароль"
								   style={{height: "56px"}}
							/>
						</Form.Item>
						<Form.Item>
							<BaseButton props={{type: "primary"}}>Зарегестрироваться</BaseButton>
						</Form.Item>
						<Form.Item>
							<Link className="auth__register-link" to="/register">Войти в аккаунт</Link>
						</Form.Item>
					</Form>
				) : (
					<div className="auth__success-block">
						<div>
							<InfoCircleTwoTone style={{fontSize: "50px"}}/>
						</div>
						<h2>Подтвердите свой аккаунт</h2>
						<p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
					</div>
				)}
			</Block>
		</>
	)
}

export default RegisterForm;