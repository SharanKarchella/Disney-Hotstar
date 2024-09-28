import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function MovieView() {
  const location = useLocation();
  const { movie } = location.state || null;
  const desc = useSelector((state) => state?.descs?.[0]);
  
  return (
    <div className="text-yellow-400 px-11 ">
      <h1>{movie.name} </h1>
      <br />
      <video
        src={movie.video}
        autoPlay
        loop
        muted
        className=" w-full  // Full width for mobile

        md:w-3/4  // 75% width for medium device(≥ 768px)

        lg:w-2/3  // 66.67% width for large devices (≥ 1024px)
        
        xl:w-1/2  // 50% width for extra-large devices (≥ 1280px)
        
        2xl:w-2/5  // 40% width for 2xl devices (≥ 1536px)
        
        border border-gray-600 p-2"
      />
      <p>{desc?.description}</p>
    </div>
  );
}

export default MovieView;
