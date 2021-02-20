import React from "react";
import {DialogueItem} from "../index";
import {orderBy} from "lodash";

const Dialogues = ({items, ownerId}) => {
	return (
		<div className="dialogues">
			{orderBy(items, ["created_at"], ["desc"]).map(item => (
				<DialogueItem
					key={item._id}
					user={item.message.user}
					message={item.message.text}
					unread={0}
					created_at={item.message.created_at}
					isMe={item.message.user._id === ownerId}
				/>
			))}

			{/*<DialogueItem
				user={{
					fullname: "Фёдор Достоевский",
					isOnline: true,
				}}
				unread={0}/>

			<DialogueItem
				user={{
					fullname: "Фёдор Достоевский",
					isOnline: false,
				}}
				unread={3}/>
			<DialogueItem
				user={{
					fullname: "Фёдор Достоевский",
					isOnline: true,
				}}
				unread={105}/>*/}
		</div>
	);
}

export default Dialogues;