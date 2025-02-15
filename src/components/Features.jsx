import gsap from "gsap";
import { useEffect, useRef } from "react";
import { RiArrowDownLine } from "react-icons/ri";
import Video from "./Video";

function Features() {
  const rotateRef = useRef();
  useEffect(() => {
    const handleRotateScroll = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(rotateRef.current, {
          rotate: "+=30",
          duration: 1,
          ease: "none",
        });
      } else {
        gsap.to(rotateRef.current, {
          rotate: "-=30",
        });
      }
    };
    window.addEventListener("wheel", handleRotateScroll);
    return () => {
      window.addEventListener("wheel", handleRotateScroll);
    };
  });
  return (
    <>
      <div className="text-white mt-20 ml-10 ">
        <h1 className="text-5xl sm:text-9xl  relative">BEST OF THE INTERNET</h1>

        <h2 className="text-2xl mt-5 ml-4">2024 Showing Good Stuff...</h2>
      </div>
      <div className=" md:ml-10 md:mt-40 md:grid md:grid-cols-2 flex flex-col justify-center m-auto  md:gap-20">
        <div className="md:ml-20 mt-10 md:mt-0">
          <video
            src="videos/goodstuff.mp4"
            autoPlay
            loop
            muted
            className="w-full md:h-5/5"
          ></video>
        </div>
        <div className="text-white mt-10 md:mt-0 md:text-3xl lg:text-vase">
          <h1 className="md:mt-10  ml-10 md:ml-0 lg:mt-20">GOOD STUFF</h1>
          <p className="ml-10 md:ml-0 md:text-2xl md:w-4/5 lg:w-3/5 md:mt-8 mt-10 lg:text-base">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <video
            src="videos/goodstuff2.mp4"
            autoPlay
            loop
            muted
            className="w-full  md:w-3/5  md:h-3/5 mt-20"
          ></video>
        </div>
      </div>
      <div className="hidden md:flex fixed right-0 bottom-0 z-10">
        <div>
          <svg
            ref={rotateRef}
            width="150"
            height="200"
            viewBox="0 0 200 200"
            className="circle"
          >
            Define the path
            <defs>
              <path
                id="txt-path"
                d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
              />
            </defs>
            <text dy="2" fontSize="19" fill="white">
              <textPath
                startOffset="0"
                href="#txt-path"
                className="a-scrollIndicator__text__path text"
              >
                SCROLL TO EXPLORE •
              </textPath>

              <textPath
                startOffset="50%"
                href="#txt-path"
                className="a-scrollIndicator__text__path"
              >
                SCROLL TO EXPLORE •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex rotate-0 items-center justify-center text-white">
          <RiArrowDownLine size={42} />
        </div>
      </div>

      <Video />
    </>
  );
}

export default Features;
