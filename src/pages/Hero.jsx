import React from "react";
import Button from "../elements/Buttons";
import userProfile from "../assets/user 2.png";

function Hero() {
  return (
    <div className="container px-20 py-[100px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="textLeft">
          <div className="inText flex flex-col gap-[18px] mb-[30px]">
            <h1 className="text-[42px] font-bold text-darkBlack">Do It Now Or You Will Run Out Of Time</h1>
            <p className="text-base font-semibold text-darkGrey">Trusted by 30 million people and teams. Doit is the world favorite task manager and to do list app. Finally become focused</p>
          </div>
          <Button color="primary">Start For Free</Button>
        </div>
        <div className="userPorfile w-fit">
          <img src={userProfile} alt="user Profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
