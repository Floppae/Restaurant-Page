import React from "react";
import bg3 from "./images/bg3.jpg";
import logo from "./images/logo.png";
import Direwolf from "./images/Direwolf.avif";
import Howling from "./images/Howling.avif";
import TheBeast from "./images/TheBeast.avif";
import BrothersGrimm from "./images/Brothers_grimm_wrap.avif";
import CarnivoresDelight from "./images/Carnivores_Delight_wrap.avif";
import ThePack from "./images/The_Pack_wrap.avif";
import Underworld from "./images/The_Underworld_wrap.avif";
import Wolverine from "./images/Wolverine.avif";
import BlueMoon from "./images/BlueMoon.avif";

const menuItems = [
  {
    image: Direwolf,
    title: "Dire Wolf",
    description:
      "Fried chicken wrapped in ginger dough with beef bacon, melted cheddar, green papaya slaw, spicy pickled shipka peppers, and Wolf Ketchup®",
  },
  {
    image: Howling,
    title: "Howling",
    description:
      "Grilled chicken wrapped in date and pumpkin seed dough with fried pickles, feta, melon, mint, and yogurt sauce",
  },
  {
    image: TheBeast,
    title: "The Beast",
    description:
      "Grilled steak wrapped in turmeric dough with BBQ crunch, blue cheese, marinated green olives, cilantro, and red chili mayo",
  },
  {
    image: BrothersGrimm,
    title: "Brothers Grimm",
    description:
      "Grilled chicken wrapped in chestnut and chili dough with pickled shitake mushrooms, raisins, pickles, plantain chips, and chipotle aioli",
  },
  {
    image: CarnivoresDelight,
    title: "Carnivores Delight",
    description:
      "Grilled steak wrapped in date and pumpkin seed dough with fried egg, sumac onions, pickles, and mustard horseradish sauce",
  },
  {
    image: ThePack,
    title: "The Pack",
    description:
      "Scrambled eggs and lamb bacon wrapped in chestnut and chili dough with melted cheddar, sumac onions, tater tots, pickled jalapeño, and chipotle aioli",
  },
  {
    image: Underworld,
    title: "Underworld",
    description:
      "Grilled steak wrapped in white flour dough with granny smith apples, pickles, toasted cashew nuts, goat cheese, and tahini",
  },
  {
    image: Wolverine,
    title: "Wolverine",
    description:
      "Grilled chicken and blue cheese wrapped in turmeric dough, two fried eggs, shallot, kohlrabi, pickled jalapeno, pumpkin seed, tahini sauce",
  },
  {
    image: BlueMoon,
    title: "Once In A Blue Moon",
    description:
      "Fried chicken and feta wrapped in plain dough, cashew, spicy pickled pineapple, sumac onions, cilantro, kohlrabi, mint yogurt sauce",
  },
];

const Menu = () => {
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
        className="w-full h-100vh flex justify-center bg-fixed bg-cover"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="flex flex-col items-center mt-40 mb-20">
          <h1 className="text-4xl font-bold mb-10">Our Menu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="bg-black border border-orange-500 rounded-lg flex flex-col items-center p-4"
              >
                <img
                  src={item.image}
                  className="w-full h-64 object-cover rounded"
                />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
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

export default Menu;
