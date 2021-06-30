import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const App = () => {

	const [hoursForClock, setHoursForClock] = useState('12')
	const [minutes, setMinutes] = useState('0')
	const [seconds, setSeconds] = useState('0')
	const [ampm, setAmPm] = useState('am')
	const [month, setMonth] = useState('6')
	const [day, setDay] = useState('2')
	const [date, setDate] = useState('1')
	const [darkmode, setDarkMode] = useState(false)

	const minuteRef = useRef()
	const secondRef = useRef()
	const hourRef = useRef()

	useEffect(() => {
		const initSetTime = () => {
			const time = new Date();
			setMonth(time.getMonth());
			setDay(time.getDay());
			setDate(time.getDate());
			const hours = time.getHours();
			setHoursForClock(hours % 12);
			setMinutes(time.getMinutes());
			setSeconds(time.getSeconds());
			setAmPm(hours >= 12 ? 'PM' : 'AM');

			hourRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
			minuteRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
			secondRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
		}

		const id = setInterval(initSetTime, 1000);
		return () => clearInterval(id)
	}, [hoursForClock, seconds, minutes])

	const scale = (num, in_min, in_max, out_min, out_max) => {
		return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}

	const onClickHandler = (e) => {

		setDarkMode(darkmode => !darkmode)
		if (darkmode) {
			document.body.style.backgroundColor = '#fff'
			document.body.style.color = '#111'
		}
		else {
			document.body.style.backgroundColor = '#111'
			document.body.style.color = '#fff'

		}
	}

	return (
		<div className={`mode ${darkmode ? 'dark' : ''}`}>
			<button className={`toggle ${darkmode ? 'dark' : ''}`} onClick={onClickHandler}>{`${darkmode ? 'Light mode' : 'Dark mode'}`}</button>
			<div className="clock-container">
				<div className="clock">
					<div className={`needle hour ${darkmode ? 'dark' : ''}`} ref={hourRef}></div>
					<div className={`needle minute ${darkmode ? 'dark' : ''}`} ref={minuteRef}></div>
					<div className={`needle second ${darkmode ? 'dark' : ''}`} ref={secondRef}></div>
					<div className={`center-point ${darkmode ? 'dark' : ''}`}></div>
				</div>

				<div className="time">{hoursForClock}:{minutes < 10 ? `0${minutes}` : minutes} {ampm}</div>
				<div className={`date ${darkmode ? 'dark' : ''}`}>{days[day]}, {months[month]} <span className={`circle ${darkmode ? 'dark' : ''}`}>{date}</span></div>
			</div>
		</div >
	);
};

export default App;
