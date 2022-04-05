import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);
		return () => clearInterval(interval);
	});

	const formatTime = () => {
		const six = `${Math.floor(timer / 100000) % 10}`;
		const five = `${Math.floor(timer / 10000) % 10}`;
		const four = `${Math.floor(timer / 1000) % 10}`;
		const three = `${Math.floor(timer / 100) % 10}`;
		const two = `${Math.floor(timer / 10) % 10}`;
		const one = `${timer % 10}`;

		const reset = () => {
			setTimer(0);
		};

		return (
			<div className="bg-scondary rounded-circle">
				<div className="row d-flex justify-content-center text-center fs-1 fw-bold">
					<div
						style={{ width: "4rem", height: "4rem" }}
						className="bg-dark text-white m-2">
						<i className="fas fa-clock"></i>
					</div>
					<div
						style={{ width: "4rem", height: "4rem" }}
						className="bg-dark text-white m-2">
						{six}
					</div>
					<div
						style={{ width: "4rem", height: "4rem" }}
						className="bg-dark text-white m-2">
						{five}
					</div>
					<div
						style={{ width: "4rem", height: "4rem" }}
						className="bg-dark text-white m-2">
						{four}
					</div>
					<div
						style={{ width: "4rem", height: "4rem" }}
						className="bg-dark text-white m-2">
						{three}
					</div>
					<div
						style={{ width: "4rem", height: "4rem" }}
						className="bg-dark text-white m-2">
						{two}
					</div>
					<div
						style={{ width: "4rem", height: "4rem" }}
						className="bg-dark text-white m-2">
						{one}
					</div>
					<button onClick={reset}>Reset</button>
				</div>
			</div>
		);
	};

	return <div className="row">{formatTime()}</div>;
};

export default SecondsCounter;
