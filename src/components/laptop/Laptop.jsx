import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from "@react-three/drei";
import HeroPage from "./HeroPage";

function Model(props) {
	const group = useRef();
	// Load model
	const { nodes, materials } = useGLTF("/mac-draco.glb");
	// Make it float
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1);
		group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1);
		group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1);
		group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1);
	});
	// The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx

	// Position groups for different window sizes
	const positions = {
		0: [0.2, 0.05, -0.08],
		650: [0.14, 0.05, -0.6],
		1000: [0.4, 0.05, 0.3],
		1200: [0.17, 0.05, -0.08],
		1400: [0.35, 0.05, -0.08],
		1600: [0, 0.05, -0.08],
		1800: [0.2, 0.05, -0.6],
		2000: [0.25, 0.05, -0.08],
		2200: [0.3, 0.05, -0.08],
		2400: [0, 0.05, -0.08],
		2600: [0.2, 0.05, -0.08],
	};

	// Get position based on window width
	const getPosition = (width, positions) => {
		let position = positions[0];
		for (let key in positions) {
			if (width >= key) {
				position = positions[key];
			}
		}
		return position;
	};

	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
				<group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
					<mesh material={materials.aluminium} geometry={nodes["Cube008"].geometry} />
					<mesh material={materials["matte.001"]} geometry={nodes["Cube008_1"].geometry} />
					<mesh geometry={nodes["Cube008_2"].geometry}>
						{/* position needs to align properly with the laptop screen, this can change on smaller screens */}
						<Html className="content" rotation-x={-Math.PI / 2} position={getPosition(window.innerWidth, positions)} transform occlude portal={true}>
							<div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
								<HeroPage laptopContent={props.laptopContent} />
							</div>
						</Html>
					</mesh>
				</group>
			</group>
			<mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
			<group position={[0, -0.1, 3.39]}>
				<mesh material={materials.aluminium} geometry={nodes["Cube002"].geometry} />
				<mesh material={materials.trackpad} geometry={nodes["Cube002_1"].geometry} />
			</group>
			<mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
		</group>
	);
}

export default function Laptop3D(props) {
	return (
		<Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
			<pointLight position={[10, 10, 10]} intensity={1.5} />
			<Suspense fallback={null}>
				<group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
					<Model laptopContent={props.laptopContent} />
				</group>
				<Environment preset="city" />
			</Suspense>
			<ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
			<OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
		</Canvas>
	);
}
