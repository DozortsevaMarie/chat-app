import React from "react";
import {DialogueItem, Message} from "../../components";

const Home = () => {
	return (
		<section className="home">
			<div className="dialogues">
				<DialogueItem
				user={{
					fullname: "Фёдор Достоевский",
					isOnline: true,
				}}
				unread={0}/>
			</div>
			<div className="dialogues">
				<DialogueItem
					user={{
						fullname: "Фёдор Достоевский",
						isOnline: false,
					}}
					unread={3}/>
			</div>
			<div className="dialogues">
				<DialogueItem
					user={{
						fullname: "Фёдор Достоевский",
						isOnline: true,
					}}
					unread={105}/>
			</div>

			{/*<Dialogue items={[
				{
				user: {
					fullname: "Фёдор Достоевский",
					avatar: null
				},
				lestMessage{
					text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
					isRead: false,
					created_at: new Date(),
				}
				}
			]}/>*/}

			{/*<Message avatar="https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png"
					 text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
					 date={new Date(2020, 6, 2)}
					 isMe={false}
					 attachments={[
						 {
							 filename: "image.jpg",
							 url: "https://source.unsplash.com/100x100/?random=1&nature,water"

						 },
						 {
							 filename: "image.jpg",
							 url: "https://source.unsplash.com/100x100/?random=2&nature,water"

						 },
						 {
							 filename: "image.jpg",
							 url: "https://source.unsplash.com/100x100/?random=3&nature,water"

						 }
					 ]}/>

			<Message avatar="https://img.icons8.com/bubbles/2x/user-male.png"
					 text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
					 date={new Date(2020, 6, 2)}
					 isMe={true}
					 isRead={false}
			/>
			<Message avatar="https://img.icons8.com/bubbles/2x/user-male.png"
					 isTyping={true}
			/>
			<Message avatar="https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png"
			date={new Date(2020, 6, 2)}
			isMe={false}
			attachments={[
			{
				filename: "image.jpg",
				url: "https://source.unsplash.com/100x100/?random=1&nature,water"

			}]}/>*/}
		</section>
	)
}

export default Home;