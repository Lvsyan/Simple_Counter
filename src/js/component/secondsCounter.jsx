import React, { useState, useEffect} from "react";
import Home from "./home.jsx";


const secondsCounter = ({seconds}) => {

    const [timer, setTimer] = useState(seconds);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);
		return () => clearInterval(interval);
	});

	const formatTime = () => {
		const six = `${Math.floor(timer / 100000)}`.slice(-2);
		const five = `${Math.floor(timer / 10000)}`.slice(-2);
		const four = `${Math.floor(timer / 1000)}`.slice(-2);
		const three = `${Math.floor(timer / 100)}`.slice(-2);
		const two = `${Math.floor(timer / 10)}`.slice(-2);
		const one = `${timer % 10}`.slice(-2);

		return (
			<>
				<div
					style={{ width: "2rem", height: "2.5rem" }}
					className="bg-dark text-white m-2">
					{six}
				</div>
				<div
					style={{ width: "2rem", height: "2.5rem" }}
					className="bg-dark text-white m-2">
					{five}
				</div>
				<div
					style={{ width: "2rem", height: "2.5rem" }}
					className="bg-dark text-white m-2">
					{four}
				</div>
				<div
					style={{ width: "2rem", height: "2.5rem" }}
					className="bg-dark text-white m-2">
					{three}
				</div>
				<div
					style={{ width: "2rem", height: "2.5rem" }}
					className="bg-dark text-white m-2">
					{two}
				</div>
				<div
					style={{ width: "2rem", height: "2.5rem" }}
					className="bg-dark text-white m-2">
					{one}
				</div>
			</>
		);
	};

    return <div className="row">{formatTime()}</div>;
}

export default SecondsCounter;