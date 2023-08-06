import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";

import "./Loader.scss";

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Pin the loader


    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.set(".loader_logo", { y: "100%" });
    tl.to(".loader_logo", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".loader_logo", { opacity: 0, duration: 1, stagger: 0.25, delay: 1 });
    tl.to(".loader", { opacity: 0, duration: 2, stagger: 0.25 }, "-=1");

    tl.set(".loader", { display: "none" });
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader_logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Loader;
