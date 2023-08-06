import './WarpBG.scss';

export default function WarpBG() {
	return (
		<div className="warp_scene">
			<div className="warp_warp">
				<div className="wall wall-right"></div>
				<div className="wall wall-left"></div>
				<div className="wall wall-top"></div>
				<div className="wall wall-bottom"></div>
				<div className="wall wall-back"></div>
			</div>
			<div className="warp_warp">
				<div className="wall wall-right"></div>
				<div className="wall wall-left"></div>
				<div className="wall wall-top"></div>
				<div className="wall wall-bottom"></div>
				<div className="wall wall-back"></div>
			</div>
		</div>
	);
}
