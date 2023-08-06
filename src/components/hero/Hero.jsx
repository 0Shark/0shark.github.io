import './Hero.scss';
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = (props) => {
  const hero = useRef(null);
  const heroText = useRef(null);
  const heroSocial = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '.hero_video',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.hero_video',
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: true,
          toggleActions: 'restart none none reverse',
        },
      }
    );
  }, []);

  return (
		<section className="hero" ref={hero}>
			<div className="hero_video">
				<video autoPlay muted loop>
					<source src="https://shkence.info/wp-content/uploads/2023/08/0shark.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="hero_text" ref={heroText}>
				<h1 className="hero_text-title">{props.title}</h1>
				<p className="hero_text-subtitle">{props.subtitle}</p>
			</div>
			<div className="hero_social" ref={heroSocial}>
				<a href="https://github.com/0Shark" target="_blank" rel="noreferrer">
					<i className="fab fa-github hero_social-icon icon-3d"></i>
				</a>
				<a href="https://www.linkedin.com/in/juled-zaganjori/" target="_blank" rel="noreferrer">
					<i className="fab fa-linkedin hero_social-icon icon-3d"></i>
				</a>
				<a href="https://twitter.com/0Shark1" target="_blank" rel="noreferrer">
					<i className="fab fa-twitter hero_social-icon icon-3d"></i>
				</a>
			</div>

			<div className="hero_scroll">
				<a href="#about">
					<i className="fa-light fa-arrow-down"></i>
				</a>
			</div>
		</section>
	);
};

export default Hero;