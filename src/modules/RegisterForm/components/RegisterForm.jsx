import React, {useState} from "react";
import {BaseButton, Block} from "../../../components";
import {Form, Input} from "antd";
import {Link} from "react-router-dom";
import {InfoCircleTwoTone} from '@ant-design/icons';


const RegisterForm = (props) => {
	debugger
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
	} = props;
	const [success, setSuccess] = useState(true);
	return (
		<>
			<div className="auth__top">
				<h2>Регистрация</h2>
				<p>Для входа в чат, вам нужно зарегистрироваться</p>
			</div>
			<Block>
				{success ? (<Form
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
								   onBlur={handleBlur}/>

						</Form.Item>
						<Form.Item>
							<Input placeholder="Ваше имя"
								   style={{height: "56px"}}/>

						</Form.Item>
						<Form.Item
							name="password"
							hasFeedback
							validateStatus={!touched.password ? "" :
								errors.password && touched.password ? "error" : "success"}
							help={!touched.password ? "" : errors.password}
						>
							<Input id="password"
								   type="password"
								   placeholder="Пароль"
								   value={values.password}
								   onChange={handleChange}
								   onBlur={handleBlur}
								   style={{height: "56px"}}
							/>
						</Form.Item>
						<Form.Item
							hasFeedback
							validateStatus={!touched.password ? "" :
								errors.password && touched.password ? "error" : "success"}
							help={!touched.password ? "" : errors.password}
						>
							<Input id="password"
								   type="password2"
								   placeholder="Повторить пароль"
								   value={values.password}
								   onChange={handleChange}
								   onBlur={handleBlur}
								   style={{height: "56px"}}
							/>
						</Form.Item>
						<Form.Item>
							<BaseButton props={{type: "primary", onClick: handleSubmit}}>Зарегестрироваться</BaseButton>
						</Form.Item>
						<Form.Item>
							<Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
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