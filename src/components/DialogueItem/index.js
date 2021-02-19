import React from "react";
import {ReadIcon} from "../index";
import "./DialogueItem.scss";
import classNames from "classnames";

const getAvatar = avatar => {
	if (avatar) {
		return (
			<img src={avatar} alt=""/>
		)
	} else {
		// makeAvatar();
	}
}

const DialogueItem = ({user, message, isOnline, unread}) => {
	return (
		<div className={classNames("dialogues__item", {"dialogues__item--online": user.isOnline})}>
			<div className="dialogues__item-avatar">
				{getAvatar("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png")}
			</div>
			<div className="dialogues__item-info">
				<div className="dialogues__item-info-top">
					<b>Фёдор Достоевский</b>
					<span>
						13.03
						{/*<Time date={new Date()}/>*/}
					</span>
				</div>
				<div className="dialogues__item-info-bottom">
					<p>Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька:
						Михайла, Федор, Варвара и Андрюша</p>
					<ReadIcon isRead={false} isMe={true}/>
					{unread > 0 && <div className="dialogues__item-info-bottom-count">{unread > 9 ? "+9" : unread}</div>}
				</div>
			</div>
		</div>
	);
}

export default DialogueItem;