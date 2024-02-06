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
    <main className="container mx-auto font-inter lg:h-screen lg:px-48 lg:pt-8">
      <nav className="flex items-center justify-between px-4 pb-3 pt-7 lg:pb-8">
        <img className="h-7 w-max lg:h-12" src={logo} alt="Logo" />
        <img
          onClick={handleClick}
          className="size-max lg:hidden"
          src={iconMenu}
          alt="Hamburger Menu"
        />
        <ul className="hidden gap-8 lg:flex">
          {data.navigation.map((data) => (
            <li
              className="text-neutral-veryDarkBlue transition ease-in-out hover:text-primary-softRed"
              key={data.id}
            >
              <a href="/">{data.title}</a>
            </li>
          ))}
        </ul>
        {menu && (
          <div className="fixed inset-0 bg-neutral-veryDarkBlue/40 lg:hidden">
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
                    className="text-xl text-neutral-veryDarkBlue"
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
      <section className="flex flex-col gap-14 p-4 lg:grid lg:h-auto lg:grid-cols-3 lg:grid-rows-3 lg:gap-9 lg:gap-x-4">
        <section className="grid grid-cols-1 gap-4 lg:col-span-2 lg:row-span-3 lg:grid-cols-2 lg:pr-5">
          <img
            className="h-max w-full lg:hidden"
            src={mobileWeb3}
            alt="Web 3 Image"
          />
          <img
            className="col-span-2 hidden h-max w-full lg:block"
            src={desktopWeb3}
            alt="Web 3 Image"
          />
          <h1 className="text-[2.6rem] font-extrabold leading-none text-neutral-veryDarkBlue lg:w-3/4 lg:text-5xl">
            {data.mainArticle.title}
          </h1>
          <div className="flex flex-col space-y-4 lg:h-full lg:justify-between lg:space-y-0 lg:pl-3">
            <p className="lg:text-pretlg text-neutral-darkGrayishBlue lg:text-sm">
              {data.mainArticle.description}
            </p>
            <a
              className="w-max bg-primary-softRed px-6 py-3 text-sm tracking-[0.25rem] text-white transition ease-in-out hover:bg-neutral-veryDarkBlue sm:text-sm"
              href="/"
            >
              READ MORE
            </a>
          </div>
        </section>
        <aside className="flex flex-col gap-4 bg-neutral-veryDarkBlue p-5 lg:row-span-3 lg:py-8">
          <h1 className="text-3xl font-bold text-primary-softOrange lg:text-5xl">
            New
          </h1>
          <ul className="flex flex-col gap-2 divide-y-[1px] divide-neutral-darkGrayishBlue lg:grid lg:h-full lg:grid-flow-row">
            {data.newArticle.map((data) => (
              <li className="py-5" key={data.id}>
                <h2 className="text-xl font-bold text-white transition ease-in-out hover:text-primary-softOrange lg:text-2xl">
                  <a href="/">{data.title}</a>
                </h2>
                <p className="text-neutral-grayishBlue">{data.description}</p>
              </li>
            ))}
          </ul>
        </aside>
        <ul className="flex h-max flex-col gap-8  lg:col-span-3 lg:grid lg:grid-flow-col">
          {data.topArticle.map((data) => (
            <li className="flex gap-5" key={data.id}>
              <img
                className="h-32 w-max"
                src={images[data.id - 1]}
                alt={data.alt}
              />
              <div>
                <h1 className="text-3xl font-bold text-neutral-grayishBlue">
                  0{data.id}
                </h1>
                <h2 className="text-lg font-extrabold text-neutral-veryDarkBlue transition ease-in-out hover:text-primary-softRed">
                  <a href="/">{data.title}</a>
                </h2>
                <p className="text-sm text-neutral-darkGrayishBlue">
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
