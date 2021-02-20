import React from "react";
import {Dialogues, Message} from "../../components";
import Message1 from "../../components/Message";

const Home = () => {
	return (
		<section className="home">
			<Dialogues items={[
				{
					_id: Math.random(),
					ownerId: 1,
					message: {
						user: {
							_id: 1,
							fullname: "Фёдор Достоевский",
							avatar: null,
							isOnline: true,
						},
						text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
						isRead: false,
						created_at: new Date(2020, 6, 2),
					}
				}
			]}/>

			<Message avatar="https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png"
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
					 isRead={true}
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

						 }]}/>
			<Message avatar="https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png"
					 date={new Date(2020, 6, 2)}
					 isMe={false}
					 audio="https://dl.espressif.com/dl/audio/gs-16b-1c-44100hz.mp3"
					/>
		</section>
	)
}

export default Home;