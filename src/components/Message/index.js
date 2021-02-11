import React from "react";
import {PropTypes} from "prop-types";
import "./Message.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
import checked from "./../../assets/img/arrows.svg";
import notRead from "./../../assets/img/one-arrow.svg";

const Message = ({avatar, user, text, date, isMe, isRead}) => {
	return (
		<div className={classNames("message", {"message--isMe": isMe})}>
			<div className="message__content">
				{isMe && isRead ? (<img className="message__icon-read" src={checked} alt="read"/>)
				: (<img className="message__icon-read message__icon-read--no" src={notRead} alt="not read"/>)}
				<div className="message__avatar">
					<img src={avatar} alt={`Avatar ${user.fullName}`}/>
				</div>
				<div className="message__info">
					<div className="message__bubble">
						<p className="message__text">{text}</p>
					</div>
					<span className="message__date">{formatDistanceToNow(date, {
						addSuffix: true,
						locale: ruLocale
					})}</span>
				</div>
			</div>
		</div>
	);
}

Message.defaultProps = {
	user: {}
};

Message.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.object,
	user: PropTypes.object,
};

export default Message;