import React from "react";
import {ReadIcon} from "../index";
import "./DialogueItem.scss";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

const getMessageItem = created_at => {
	if (isToday(created_at)) {
		return format("HH:ss")
	}
	else {
		return format (created_at, "dd.MM.yyyy")
	}
}

const getAvatar = avatar => {
	if (avatar) {
		return (
			<img src={avatar} alt=""/>
		)
	} else {
		// makeAvatar();
	}
}

const DialogueItem = ({user, message, unread, created_at, isMe}) => {
	return (
		<div className={classNames("dialogues__item", {"dialogues__item--online": user.isOnline})}>
			<div className="dialogues__item-avatar">
				{getAvatar("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png")}
			</div>
			<div className="dialogues__item-info">
				<div className="dialogues__item-info-top">
					<b>{user.fullname}</b>
					<span>
						{getMessageItem(created_at)}
						{/*<Time date={new Date()}/>*/}
					</span>
				</div>
				<div className="dialogues__item-info-bottom">
					<p>{message}</p>
					{isMe && <ReadIcon isRead={false} isMe={true}/>}
					{unread > 0 && <div className="dialogues__item-info-bottom-count">{unread > 9 ? "+9" : unread}</div>}
				</div>
			</div>
		</div>
	);
}

export default DialogueItem;