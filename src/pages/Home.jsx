import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const auths = useSelector((state) => state?.auths?.[0]);
  const data = 2

  useEffect(() => {
    console.log(auths);
  }, []);

  return (
    <div className="">
      {/* <h1>Hi {auths?.username}</h1> */}
      <Slider />
      <ProductionHouse />
    </div>
  );
}

export default Home;
