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
    <main className="font-inter container mx-auto md:h-screen md:px-48 md:pt-8">
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
            <li
              className="text-neutral-veryDarkBlue hover:text-primary-softRed transition ease-in-out"
              key={data.id}
            >
              <a href="/">{data.title}</a>
            </li>
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
                    <a href="/">{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
      <section className="flex flex-col gap-14 p-4 md:grid md:h-auto md:grid-cols-3 md:grid-rows-3 md:gap-9 md:gap-x-4">
        <section className="grid grid-cols-1 gap-4 md:col-span-2 md:row-span-3 md:grid-cols-2 md:pr-5">
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
          <h1 className="text-neutral-veryDarkBlue text-[2.6rem] font-extrabold leading-none md:w-3/4 md:text-5xl">
            {data.mainArticle.title}
          </h1>
          <div className="flex flex-col space-y-4 md:h-full md:justify-between md:space-y-0 md:pl-3">
            <p className="text-neutral-darkGrayishBlue md:text-md md:text-pretty">
              {data.mainArticle.description}
            </p>
            <a
              className="bg-primary-softRed md:text-md hover:bg-neutral-veryDarkBlue w-max px-6 py-3 text-sm tracking-[0.25rem] text-white transition ease-in-out"
              href="/"
            >
              READ MORE
            </a>
          </div>
        </section>
        <aside className="bg-neutral-veryDarkBlue flex flex-col gap-4 p-5 md:row-span-3 md:py-8">
          <h1 className="text-primary-softOrange text-3xl font-bold md:text-5xl">
            New
          </h1>
          <ul className="divide-neutral-darkGrayishBlue flex flex-col gap-2 divide-y-[1px] md:grid md:h-full md:grid-flow-row">
            {data.newArticle.map((data) => (
              <li className="py-5" key={data.id}>
                <h2 className="hover:text-primary-softOrange text-xl font-bold text-white transition ease-in-out md:text-2xl">
                  <a href="/">{data.title}</a>
                </h2>
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
                <h2 className="text-neutral-veryDarkBlue hover:text-primary-softRed text-lg font-extrabold transition ease-in-out">
                  <a href="/">{data.title}</a>
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
