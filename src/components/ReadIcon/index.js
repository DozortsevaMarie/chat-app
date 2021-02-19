import React from "react";
import checked from "../../assets/img/arrows.svg";
import notRead from "../../assets/img/one-arrow.svg";
import {PropTypes} from "prop-types";
import Message from "../Message";

const ReadIcon = ({ isMe, isRead}) => {
	return (
		isMe && (isRead ? (<img className="message__icon-read" src={checked} alt="read"/>)
			: (<img className="message__icon-read message__icon-read--no" src={notRead} alt="not read"/>))
	);
}

ReadIcon.propTypes = {
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,

};

export default ReadIcon;