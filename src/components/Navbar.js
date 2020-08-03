import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../580b57fcd9996e24bc43c529.png";

const Navbar = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	return (
		<div className={`nav ${show && "nav_black"}`}>
			<div className='nav_logo'>
				<img className='nav_logo ' src={logo} alt='netflix logo' />
			</div>
			<div className='banner_buttons' style={{ margin: "1rem" }}>
				<button className='banner_button'>sign in</button>
				<button className='banner_button'>sign up</button>
			</div>
		</div>
	);
};

export default Navbar;
