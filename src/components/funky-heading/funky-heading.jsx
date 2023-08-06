import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import Roboto from "../../assets/fonts/helvetiker_bold.typeface.json";
import { extend } from "@react-three/fiber";


import "./funky-heading.scss";

extend({ TextGeometry, OrbitControls });

// Add multiple headings in random positions

const CameraController = () => {
	const { camera, gl } = useThree();
	useEffect(() => {
		const controls = new OrbitControls(camera, gl.domElement);
		controls.minDistance = 3;
		controls.maxDistance = 20;
		return () => {
			controls.dispose();
		};
	}, [camera, gl]);
	return null;
};

const CalculateColorShade = (color, percent) => {
	let R = parseInt(color.substring(1, 3), 16);
	let G = parseInt(color.substring(3, 5), 16);
	let B = parseInt(color.substring(5, 7), 16);

	R = parseInt((R * (100 + percent)) / 100);
	G = parseInt((G * (100 + percent)) / 100);
	B = parseInt((B * (100 + percent)) / 100);

	R = R < 255 ? R : 255;
	G = G < 255 ? G : 255;
	B = B < 255 ? B : 255;

	const RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
	const GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
	const BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

	return "#" + RR + GG + BB;
};

function Text3d(props) {
	const font = new FontLoader().parse(Roboto);
	const mesh = useRef();
	const position = props.position;

	const textOptions = {
		font,
		size: 5,
		height: 1,
	};

	useFrame(() => {
		// Bounce
		mesh.current.position.y = Math.sin(props.speed / 10 + Date.now() / 1000) * 2;
		// Rotate
		mesh.current.rotation.x = mesh.current.rotation.y += props.speed / 1000;
		// Scale
		mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z = 1 + Math.sin(props.speed / 10 + Date.now() / 1000) * 0.3;
		// Center
		mesh.current.geometry.center();
	});

	return (
		<mesh ref={mesh} position={position}>
			<textGeometry attach="geometry" args={[props.text, textOptions]} />
			<meshStandardMaterial attach="material" color={CalculateColorShade("#2196f3", props.speed * 10)} roughness={0.3} metalness={0.3} />
		</mesh>
	);
}

export default function Text3D(props) {
	let text_array = props.text.replace(/[[\]']+/g, "").split(", ");

	let text_position = text_array.map((e, i) => {
		const x = Math.floor(Math.random() * 40) - 20;
		const y = Math.floor(Math.random() * 40) - 20;
		const z = Math.random() * 20 - 5;

		return [x, y, z];
	});

	return (
		<Canvas className="funky-heading" style={{ height: "100vh", width: "100vw" }} camera={{ position: [0, 0, 20], fov: 70 }} dpr={window.devicePixelRatio}>
			<CameraController position={[0, 0, 10]} fov={170} near={0.1} far={1000} lookAt={[0, 10, 0]} updateProjectionMatrix />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			{text_array.map((e, i) => (
				<Text3d key={e} text={e} position={text_position[i]} speed={i + 1} />
			))}
		</Canvas>
	);
}
