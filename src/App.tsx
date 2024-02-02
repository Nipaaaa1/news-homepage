import logo from "/images/logo.svg";
import iconMenu from "/images/icon-menu.svg";
import iconClose from "/images/icon-menu-close.svg";
import mobileWeb3 from "/images/image-web-3-mobile.jpg";
import desktopWeb3 from "/images/image-web-3-desktop.jpg";
import gamingGrowth from "/images/image-gaming-growth.jpg";
import retroPcs from "/images/image-retro-pcs.jpg";
import topLaptops from "/images/image-top-laptops.jpg";

import { motion, AnimatePresence } from "framer-motion";

import data from "./data";
import { useState } from "react";

const navigationVariants = {
  intial: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      staggerChildren: 0.1,
    },
  },
};

const App = () => {
  const images = [retroPcs, topLaptops, gamingGrowth];
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <main className="font-inter container mx-auto lg:h-screen lg:px-48 lg:pt-8">
      <motion.nav
        variants={navigationVariants}
        initial="initial"
        animate="show"
        className="flex items-center justify-between px-4 pb-3 pt-7 lg:pb-8"
      >
        <motion.img
          variants={navigationVariants}
          className="h-7 w-max lg:h-12"
          src={logo}
          alt="Logo"
        />
        <motion.img
          variants={navigationVariants}
          onClick={handleClick}
          className="size-max lg:hidden"
          src={iconMenu}
          alt="Hamburger Menu"
        />
        <motion.ul
          variants={navigationVariants}
          className="hidden gap-8 lg:flex"
        >
          {data.navigation.map((data) => (
            <motion.li
              variants={navigationVariants}
              className="text-neutral-veryDarkBlue hover:text-primary-softRed transition ease-in-out"
              key={data.id}
            >
              <a href="/">{data.title}</a>
            </motion.li>
          ))}
        </motion.ul>
        {menu && (
          <div className="bg-neutral-veryDarkBlue/40 fixed inset-0 lg:hidden">
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
      </motion.nav>
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
          <h1 className="text-neutral-veryDarkBlue text-[2.6rem] font-extrabold leading-none lg:w-3/4 lg:text-5xl">
            {data.mainArticle.title}
          </h1>
          <div className="flex flex-col space-y-4 lg:h-full lg:justify-between lg:space-y-0 lg:pl-3">
            <p className="text-neutral-darkGrayishBlue lg:text-pretlg lg:text-sm">
              {data.mainArticle.description}
            </p>
            <a
              className="bg-primary-softRed hover:bg-neutral-veryDarkBlue w-max px-6 py-3 text-sm tracking-[0.25rem] text-white transition ease-in-out sm:text-sm"
              href="/"
            >
              READ MORE
            </a>
          </div>
        </section>
        <aside className="bg-neutral-veryDarkBlue flex flex-col gap-4 p-5 lg:row-span-3 lg:py-8">
          <h1 className="text-primary-softOrange text-3xl font-bold lg:text-5xl">
            New
          </h1>
          <ul className="divide-neutral-darkGrayishBlue flex flex-col gap-2 divide-y-[1px] lg:grid lg:h-full lg:grid-flow-row">
            {data.newArticle.map((data) => (
              <li className="py-5" key={data.id}>
                <h2 className="hover:text-primary-softOrange text-xl font-bold text-white transition ease-in-out lg:text-2xl">
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
