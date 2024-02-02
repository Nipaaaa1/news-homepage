import logo from "/images/logo.svg";
import iconMenu from "/images/icon-menu.svg";
import iconClose from "/images/icon-menu-close.svg";
import mobileWeb3 from "/images/image-web-3-mobile.jpg";
import desktopWeb3 from "/images/image-web-3-desktop.jpg";
import gamingGrowth from "/images/image-gaming-growth.jpg";
import retroPcs from "/images/image-retro-pcs.jpg";
import topLaptops from "/images/image-top-laptops.jpg";

import data from "./data";
import { useState } from "react";

const App = () => {
  const images = [retroPcs, topLaptops, gamingGrowth];
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <main className="font-inter  md:px-48 md:pt-8">
      <nav className="flex items-center justify-between px-4 pb-3 pt-7 md:pb-8">
        <img className="h-7 w-max md:h-12" src={logo} alt="Logo" />
        <img
          onClick={handleClick}
          className="size-max md:hidden"
          src={iconMenu}
          alt="Hamburger Menu"
        />
        <ul className="hidden gap-8 md:flex">
          {data.navigation.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
        {menu && (
          <div className="bg-neutral-veryDarkBlue/40 fixed inset-0 md:hidden">
            <div className="absolute right-0 flex h-full w-3/4 flex-col bg-white p-6">
              <img
                onClick={handleClick}
                className="size-max self-end"
                src={iconClose}
                alt="Close Icon"
              />
              <ul className="flex size-full flex-col gap-6 py-36">
                {data.navigation.map((data) => (
                  <li
                    className="text-neutral-veryDarkBlue text-xl"
                    key={data.id}
                  >
                    {data.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
      <section className="flex h-auto flex-col gap-14 p-4 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-9 md:gap-y-16">
        <section className="grid grid-cols-1 gap-4  md:col-span-2 md:row-span-2 md:grid-cols-2">
          <img
            className="h-max w-full md:hidden"
            src={mobileWeb3}
            alt="Web 3 Image"
          />
          <img
            className="col-span-2 hidden h-max w-full md:block"
            src={desktopWeb3}
            alt="Web 3 Image"
          />
          <h1 className="text-neutral-veryDarkBlue text-[2.6rem] font-extrabold leading-none md:w-3/4 md:text-6xl">
            {data.mainArticle.title}
          </h1>
          <div className="space-y-4 md:flex md:h-full md:flex-col md:justify-between md:space-y-0 md:pl-12 md:pt-4">
            <p className="text-neutral-darkGrayishBlue text-lg">
              {data.mainArticle.description}
            </p>
            <button className="bg-primary-softRed md:text-md w-max px-6 py-3 text-sm tracking-[0.25rem] text-white ">
              READ MORE
            </button>
          </div>
        </section>
        <aside className="bg-neutral-veryDarkBlue flex flex-col gap-4 p-5 md:row-span-2">
          <h1 className="text-primary-softOrange text-3xl font-bold">New</h1>
          <ul className="divide-neutral-darkGrayishBlue flex flex-col gap-2 divide-y-[1px]">
            {data.newArticle.map((data) => (
              <li className="py-5" key={data.id}>
                <h2 className="text-xl font-bold text-white">{data.title}</h2>
                <p className="text-neutral-grayishBlue">{data.description}</p>
              </li>
            ))}
          </ul>
        </aside>
        <ul className="flex h-max flex-col gap-8  md:col-span-3 md:grid md:grid-flow-col">
          {data.topArticle.map((data) => (
            <li className="flex gap-5" key={data.id}>
              <img
                className="h-32 w-max"
                src={images[data.id - 1]}
                alt={data.alt}
              />
              <div>
                <h1 className="text-neutral-grayishBlue text-3xl font-bold">
                  0{data.id}
                </h1>
                <h2 className="text-neutral-veryDarkBlue text-lg font-extrabold">
                  {data.title}
                </h2>
                <p className="text-neutral-darkGrayishBlue text-sm">
                  {data.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
