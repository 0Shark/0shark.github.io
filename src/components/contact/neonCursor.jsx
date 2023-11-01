import { useEffect, useRef } from "react";
import { neonCursor } from "threejs-toys";

const NeonCursor = () => {
	const runNeonCursorOnce = useRef(false);

	useEffect(() => {
		if (!runNeonCursorOnce.current) {
			neonCursor({
				el: document.getElementById("contact"),
				shaderPoints: 16,
				curvePoints: 80,
				curveLerp: 0.5,
				radius1: 5,
				radius2: 30,
				velocityTreshold: 10,
				sleepRadiusX: 100,
				sleepRadiusY: 100,
				sleepTimeCoefX: 0.0025,
				sleepTimeCoefY: 0.0025,
			});
			runNeonCursorOnce.current = true;
		}
	}, []);

	return null;
};

export default NeonCursor;
