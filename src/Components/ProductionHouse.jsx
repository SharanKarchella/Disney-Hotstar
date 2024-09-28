import React from "react";

import disney from "./../assets/images/disney.png";
import pixar from "./../assets/images/pixar.png";
import marvel from "./../assets/images/marvel.png";
import starwar from "./../assets/images/starwar.png";
import nationalG from "./../assets/images/nationalG.png";

import disneyV from "./../assets/videos/disney.mp4";
import pixarV from "./../assets/videos/pixar.mp4";
import marvelV from "./../assets/videos/marvel.mp4";
import starwarsV from "./../assets/videos/star-wars.mp4";
import nationalGV from "./../assets/videos/national-geographic.mp4";
import { useNavigate } from "react-router-dom";
import { adddesc, cleardescs } from "../features/todo/descriptionSlice";
import { useDispatch } from "react-redux";

function ProductionHouse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ProductionHouse = [
    {
      id: 1,
      name: "DISNEY UNIVERSE",
      image: disney,
      video: disneyV,
      description:
        "Disney ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 2,
      name: "PIXAR UNIVERSE",
      image: pixar,
      video: pixarV,
      description:
        "Pixar ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 3,
      name: "MARVEL UNIVERSE",
      image: marvel,
      video: marvelV,
      description:
        "Marvel ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 4,
      name: "STARWARS UNIVERSE",
      image: starwar,
      video: starwarsV,
      description:
        "StarWars ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 5,
      name: "NATIONAL-GEOGRAPHIC",
      image: nationalG,
      video: nationalGV,
      description:
        "National-Geographic ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {ProductionHouse.map((item) => (
        <div
          onClick={() => {
            const description = item.description;
            //navigate("/movieview");
            dispatch(cleardescs());
            dispatch(adddesc({ description }));
            navigate("/movieview", { state: { movie: item } });
          }}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800 "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className=" absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
          />

          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
