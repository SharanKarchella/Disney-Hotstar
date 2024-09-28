import React, { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const SliderImages = [
    { image: "/images/img7.jpg" },
    { image: "/images/img6.jpg" },
    { image: "/images/img5.jpg" },
    { image: "/images/img8.jpg" },
    { image: "/images/img1.jpg" },
    { image: "/images/img2.jpg" },
    { image: "/images/img3.jpg" },
    { image: "/images/img4.jpg" },
  ];

  const sliderRef = useRef();

  const sliderLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth; // Scroll left by the width of the container
    }
  };

  const sliderRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth / 2; // Scroll right by the width of the container
    }
  };

  return (
    <div className="flex items-center object-cover mx-10 ">
      <style>
        {`
      .scroll-container {
        overflow-x: auto; /* Enable horizontal scrolling */
        scrollbar-width: none; /* For Firefox */
      }
      .scroll-container::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
      }
    `}
      </style>

      <div
        onClick={() => {
          sliderLeft();
          console.log("LeftClicked");
        }}
      >
        <HiChevronLeft className="text-white text-4xl" />
      </div>

      <div
        style={{}}
        className="scroll-container flex overflow-x-auto w-full py-6 mx-5 "
        ref={sliderRef}
      >
        {SliderImages.map((item, index) => {
          return (
            <div
              className="flex-shrink-0 flex justify-center"
              style={{ width: "100%" }}
            >
              <img
                className="object-cover rounded-lg w-full outline outline-offset-0 hover:border-[6px]"
                style={{
                  height: window.innerHeight * 0.6,
                }}
                src={item?.image}
              />
            </div>
          );
        })}
      </div>

      <div onClick={() => sliderRight(sliderRef.current)}>
        <HiChevronRight
          className="text-white text-4xl"
          onClick={() => sliderRight(sliderRef.current)}
        />
      </div>
    </div>
  );
}

export default Slider;
