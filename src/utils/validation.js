export default ({isAuth, values, errors}) => {
	const rules = {
		email: (errors, value) => {
			if (!value) {
				errors.email = 'Введите email';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
			) {
				errors.email = 'Неверный email';
			}
		},
		password: (errors, value) => {
			if (!value) {
				errors.password = "Введите пароль"
			}
			else if (
				!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(value)
			) {
				errors.password = isAuth ? "Неверный пароль" : 'Слишком лёгкий пароль';
			}
		}
	};
	Object.keys(values).forEach(
		key => rules[key] && rules[key](errors, values[key])
	);
};

