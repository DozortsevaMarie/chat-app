import React from "react";
import {Message} from "../../components";

const Home = () => {
	return (
		<section className="home">
			<Message avatar="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
					 text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
					 date={new Date(2020, 6, 2)}
					 isMe={false}/>

			<Message avatar="https://img.icons8.com/bubbles/2x/user-male.png"
					 text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
					 date={new Date(2020, 6, 2)}
					 isMe={true}
					 isRead={false}/>
		</section>
	)
}

export default Home;