import LoginForm from "../components/LoginForm";
import {withFormik} from "formik";
import validateFunc from "../../../utils/validation";

export default withFormik({
	enableReinitialize: true,
	mapPropsToValues: () => ({
		email: "",
		password: ""
	}),
	validate: values => {
		let errors = {};
		validateFunc({ isAuth: true, errors, values });
		return errors;
	},
	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},
	displayName: 'LoginForm',
})(LoginForm);