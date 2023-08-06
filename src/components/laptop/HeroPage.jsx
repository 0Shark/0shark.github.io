import "./HeroPage.scss";

export default function HeroPage(props) {
	if (props.laptopContent) {
		return (
			<div className="hero-page-laptop">
				<div className="hero-page-laptop__content">
					<img src={props.laptopContent.image} />
				</div>
			</div>
		);
	} else {
		return (
			<div className="hero-page-laptop">
				<div className="hero-page-laptop__content">
					<h1 className="hero-page-laptop__title">Projects</h1>
					<p className="hero-page-laptop__description">Here are some of my projects.</p>
				</div>
			</div>
		);
	}
}
