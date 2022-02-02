import React from "react";
import "./card.scss";
import cardImg from "../assets/image-equilibrium.jpg";
import avatarImg from "../assets/image-avatar.png";
import iconEthereum from "../assets/icon-ethereum.svg";
import iconWatch from "../assets/icon-clock.svg";

const Card = () => {
  return (
    <article className="card">
      <div>
        <img src={cardImg} alt="equilibrium nft" className="card-img" />
        <h3>Equilibrium #3429</h3>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="info-nft">
          <span className="price-nft">
            <img
              src={iconEthereum}
              alt="ethereum icon"
              className="ethereum-icon"
            />
            <p>0.041 ETH</p>
          </span>
          <span className="time-nft">
            <img src={iconWatch} alt="watch icon" className="watch-icon" />
            <p>3 days left</p>
          </span>
        </div>
        <div className="underline"></div>
        <div className="info-author">
          <img src={avatarImg} alt="avatar of author" className="avatar-icon" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
