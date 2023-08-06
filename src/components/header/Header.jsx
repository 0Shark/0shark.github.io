import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const headerRef = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		// ScrollTrigger.create({
		// 	trigger: headerRef.current,
		// 	// Start before the trigger element
		// 	start: "top-=100",
		// 	end: "#about",
		// 	pin: true,
		// 	pinSpacing: false,
		// });

		const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

		tl.to(".header_logo", { y: "0%", duration: 1, stagger: 0.25 });
		tl.to(".header_nav", { y: "0%", duration: 1, stagger: 0.25 }, "-=1");
		tl.to(".header_hamburger", { y: "0%", duration: 1, stagger: 0.25 }, "-=1");
		tl.to(".header_menu_mobile", { y: "0%", duration: 1, stagger: 0.25 }, "-=1");

		tl.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 }, "-=1");
	}, []);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header" ref={headerRef}>
			<div className="header_logo">
				<a href="/">
					<img src={logo} alt="logo" />
				</a>
			</div>
			<nav className="header_nav">
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li className="header_nav-resume">
						<a href="#" target="_blank" rel="noreferrer" className="btn btn-primary">
							Resume
						</a>
					</li>
				</ul>
			</nav>
			<div className="header_hamburger" onClick={handleMenuToggle}>
				<i className="header_open fa-light fa-bars"></i>
				<i className="header_close fa-light fa-xmark-large"></i>
			</div>
			<div className={`header_menu_mobile ${isMenuOpen ? "active" : ""}`}>
				<ul>
					<li>
						<a href="#about" onClick={handleMenuToggle}>
							About
						</a>
					</li>
					<li>
						<a href="#projects" onClick={handleMenuToggle}>
							Projects
						</a>
					</li>
					<li>
						<a href="#contact" onClick={handleMenuToggle}>
							Contact
						</a>
					</li>
					<li className="header_nav-resume">
						<a href="#" target="_blank" rel="noreferrer" className="btn btn-primary">
							Resume
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
