import React, {useEffect, useRef, useState} from "react";
import {PropTypes} from "prop-types";
import "./Message.scss";
import classNames from "classnames";
import {ReadIcon, Time} from "../";
import wave from "./../../assets/img/wave.svg";
import play from "./../../assets/img/play.svg";
import pause from "./../../assets/img/pause.svg";
import { convertTime } from "./../../utils/helpers/convertTime"


const Message = ({avatar, audio, user, text, date, isMe, isRead, attachments, isTyping}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState("00:00");
	const [currentTime, setCurrentTime] = useState("00:00");
	const [progress, setProgress] = useState(0);
	const audioElem = useRef();



	const togglePlay = () => {
		setDuration(convertTime(audioElem.current.duration))
		if (!isPlaying) {
			audioElem.current.play();
			setIsPlaying(true)
		} else {
			audioElem.current.pause();
			setIsPlaying(false)
		}
	};

	const handleEnd = () => {
		setIsPlaying(false);
		setProgress(0);
	}

	const handleTimeUpdate = (e) => {
		setCurrentTime(convertTime(e.currentTarget.currentTime));
		setProgress((e.currentTarget.currentTime / e.currentTarget.duration) * 100);
	}

	/*useEffect( () => {
		setProgress((currentTime / duration) * 100);
	}, [])*/

	return (
		<div className={classNames("message", {
			"message--isMe": isMe,
			"message--typing": isTyping,
			"message--image": attachments && attachments.length === 1,
			"message--is-audio": audio,
		})}>
			<div className="message__content">
				<ReadIcon isMe={isMe} isRead={isRead}/>
				<div className="message__avatar">
					<img src={avatar} alt={`Avatar ${user.fullName}`}/>
				</div>
				<div className="message__info">
					{(audio || text || isTyping) && <div className="message__bubble">
						{text && <p className="message__text">{text}</p>}
						{isTyping && <div className="message__isTyping">
							<span className="dot one"/>
							<span className="dot two"/>
							<span className="dot three"/>
						</div>}
						{audio && (
							<div className="message__audio">
								<audio ref={audioElem}
									   src={audio}
									   preload="auto"
									   onEnded={handleEnd}
									   onCanPlay={(e) => setDuration(convertTime(e.currentTarget.duration))}
									   onTimeUpdate={handleTimeUpdate}/>
								<div className="message__audio-progress" style={{width: progress +"%"}}/>
								<div className="message__audio-info">
									<div className="message__audio-btn">
										<button onClick={togglePlay}>
											{isPlaying ? <img src={pause} alt="pause svg"/> :
												<img src={play} alt="play svg"/>}
										</button>
									</div>
									<div className="message__audio-wave">
										<img src={wave} alt="audio wave"/>
									</div>
									<span className="message__audio-duration">{isPlaying ? currentTime : duration}</span>
								</div>
							</div>
						)}
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

const Message1 = ({avatar, user, text, date, isMe, isRead, attachments, isTyping}) => {
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
	audio: PropTypes.string,
};

export default Message;