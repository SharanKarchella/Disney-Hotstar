import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { clearauths } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "FAVOURITE",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-8 items-center sm:flex">
        <img
          src={logo}
          alt="DisneyLogo"
          className="w-[80px] md:w-[115px] object-cover"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <span
              onClick={() => {
                // navigate('/home')
                navigate(
                  `/${
                    item.name.toLowerCase() == "home"
                      ? ""
                      : item.name.toLowerCase().replace(" ", "")
                  }`
                );
              }}
            >
              <HeaderItem name={item.name} Icon={item.icon} />
            </span>
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {/* {menu.map(
            (item, index) =>(
              <span
              onClick={() => {
                // navigate('/home')
                navigate(`/${item.name.toLowerCase() == "home" ? "" : item.name.toLowerCase().replace(" ", "")}`);
              }}
            >
              index < 4 && <HeaderItem name={""} Icon={item.icon} />
              </span>
            )
          )} */}

          {menu.map((item, index) => (
            <span
              key={index} // Always add a unique key for each element in a list
              onClick={() => {
                navigate(
                  `/${
                    item.name.toLowerCase() === "home"
                      ? ""
                      : item.name.toLowerCase().replace(" ", "")
                  }`
                );
              }}
            >
              {index < 4 && <HeaderItem name="" Icon={item.icon} />}
            </span>
          ))}

          {/* This is for three-dots */}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />

            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-800 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 3 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <span
        onClick={() => {
          dispatch(clearauths());
          navigate("/login");
        }}
      >
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Prescription02&hatColor=Heather&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=Angry&mouthType=Twinkle&skinColor=Tanned"
          className="w-[45px] rounded-full"
        />
      </span>
    </div>
  );
}

export default Header;
