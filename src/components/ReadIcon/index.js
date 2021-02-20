import React from "react";
import checked from "../../assets/img/arrows.svg";
import notRead from "../../assets/img/one-arrow.svg";
import {PropTypes} from "prop-types";


const ReadIcon = ({ isMe, isRead}) => (
		 isMe && (isRead ? (<img className="message__icon-read" src={checked} alt="read"/>)
			: (<img className="message__icon-read message__icon-read--no" src={notRead} alt="not read"/>))
	) || null;


ReadIcon.propTypes = {
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,

};

export default ReadIcon;