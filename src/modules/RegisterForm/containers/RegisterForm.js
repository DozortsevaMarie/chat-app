import RegisterForm from "../components/RegisterForm";
import { withFormik } from 'formik';
import validateFunc from "../../../utils/validation"

export default withFormik({
	enableReinitialize: true,
	mapPropsToValues: () => ({
		email: "",
		fullName: "",
		password: "",
		password2: ""
	}),
	validate: values => {
		let errors = {};
		validateFunc({ isAuth: false, errors, values });
		return errors;
	},
	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},
	displayName: 'RegisterForm',
})(RegisterForm);