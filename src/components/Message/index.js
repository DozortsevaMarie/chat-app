import React from "react";
import {PropTypes} from "prop-types";
import "./Message.scss";
import classNames from "classnames";
import checked from "./../../assets/img/arrows.svg";
import notRead from "./../../assets/img/one-arrow.svg";
import {ReadIcon, Time} from "../";

const Message = ({avatar, user, text, date, isMe, isRead, attachments, isTyping}) => {
	return (
		<div className={classNames("message", {
			"message--isMe": isMe,
			"message--typing": isTyping,
			"message--image": attachments && attachments.length === 1
		})}>
			<div className="message__content">
				<ReadIcon isMe={isMe} isRead={isRead}/>
				<div className="message__avatar">
					<img src={avatar} alt={`Avatar ${user.fullName}`}/>
				</div>
				<div className="message__info">
					{(text || isTyping) && <div className="message__bubble">
						{text && <p className="message__text">{text}</p>}
						{isTyping && <div className="message__isTyping">
							<span className="dot one"/>
							<span className="dot two"/>
							<span className="dot three"/>
						</div>}
					</div>}
					<div className="message__attachments">
						{attachments && attachments.map(item => (
							<div className="message__attachments-item">
								<img src={item.url} alt={item.fileName}/>
							</div>
						))}
					</div>
					{date &&
					(<span className="message__date">
							<Time date={date}/>
						</span>
					)}
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
	user: PropTypes.object,
	attachments: PropTypes.array,
	isTyping: PropTypes.bool,
};

export default Message;