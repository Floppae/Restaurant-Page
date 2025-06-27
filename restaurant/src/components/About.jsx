import React from "react";
import bg3 from "./images/bg3.jpg";
import logo from "./images/logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import "./styles.css";

const About = () => {
  return (
    <div className="w-screen h-screen text-white">
      <header className="w-full flex bg-black align-center fixed box-border justify-between">
        <div className="w-1/2">
          <img className="w-1/2" src={logo} />
        </div>

        <nav className="w-1/2 flex justify-end p-5">
          <ul className="flex gap-4" id="nav-tabs">
            <li>
              <a href="./Home">Home</a>
            </li>
            <li>
              <a href="./Menu">Menu</a>
            </li>
            <li>
              <a href="./About">About</a>
            </li>
            <li>
              <a href="./Contact">Contact</a>
            </li>
            <li>
              <a href="./Cart">Order</a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className="w-full min-h-full flex flex-col items-center justify-center bg-fixed bg-cover"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <h1>Why Choose Us?</h1>
        <h3>
          Wolfnights Rivington has served late night party goers, midnight
          snackers, and restless sleepers for 14 years.
        </h3>
        <h3>
          We aim to keep our customers happy and healthy by sourcing ingredients
          directly from local farms.
        </h3>

        <h3>We aim to minimize waste by choosing eco-friendly packaging.</h3>
        <h3>Join us for an amazing meal under city lights.</h3>
        <h3>We can't wait to meet you!</h3>
      </div>

      <footer className="flex bg-black items-center justify-between pl-20 pr-20 fixed bottom-0 left-0 w-full z-10">
        <div>
          <p>Open Monday - Friday: 9:00am - 5:00pm</p>
        </div>

        <div>
          <p>
            Photo by<br></br>
            <a href="https://unsplash.com/@druks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Félix Besombes
            </a>
            on
            <a href="https://unsplash.com/photos/photography-of-starry-skies-9qUEBg1qVKc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </div>

        <div>
          <ul className="flex">
            <li>
              <a href="https://www.instagram.com/wolfnights/?hl=en">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@wolfnights">TikTok</a>
            </li>
            <li>
              <a href="https://www.facebook.com/Wolfnightsgourmetwrap/">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default About;
