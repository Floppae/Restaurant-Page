import React from "react";
import bg3 from "./images/bg3.jpg";
import logo from "./images/logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import "./styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Home = () => {
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
        className="w-full h-full flex justify-center bg-fixed bg-cover"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        {/* Carousel imported from package react-multi-carousel*/}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={true}
          className="w-full max-w-4xl my-8"
        >
          <div>
            <img
              src={require("./images/Direwolf.avif")}
              alt="Direwolf"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div>
            <img
              src={require("./images/Howling.avif")}
              alt="Howling"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div>
            <img
              src={require("./images/Wolverine.avif")}
              alt="Wolverine"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div>
            <img
              src={require("./images/Wolfnights.jpeg")}
              alt="Wolfnights"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div>
            <img
              src={require("./images/wolfnights2.jpeg")}
              alt="Wolfnights 2"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div>
            <img
              src={require("./images/wolfnights3.jpg")}
              alt="Wolfnights 3"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </Carousel>
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

export default Home;
