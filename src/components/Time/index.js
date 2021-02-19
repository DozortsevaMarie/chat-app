import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import {PropTypes} from "prop-types";

const Time = ({date}) => {
	return (
		formatDistanceToNow(date, {
			addSuffix: true,
			locale: ruLocale
		})
	);
}

Time.propTypes = {
	date: PropTypes.string,
}

export default Time;