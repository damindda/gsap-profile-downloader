import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const [count, setCount] = useState(0);
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  });
  useGSAP(() => {
    timeline.to("#gsap-to-main", {
      x: 450,
      borderRadius: '100%',
      yoyo: true,
      rotate: 550,
      duration:2,
      ease: "back.in" 
    });

     timeline.to("#gsap-to-main", {
      y: 150,
      scale: 4,
      borderRadius: '100%',
      duration:2,
      ease: "back.inOut" 
    })

     timeline.to("#gsap-to-main", {
      x: 850,
      scale: 1,
      borderRadius: '100%',
      yoyo: true,
      rotate: 550,
      duration:2,
      ease: "back.in" 
    });
  })
  return (
    <>
      <div className="w-10 h-10 rounded-4xl bg-blue-700" id="gsap-to-main"></div>
      <h1 className="text-3xl font-bold underline">
        Hello!
      </h1>
      <button className="border-red-100 border-2 m-1 p-3 cursor-pointer" onClick={() => {
        return timeline.paused() ? timeline.play() : timeline.pause();
      }}>Play/Pause</button>
    </>
  )
}

export default App
