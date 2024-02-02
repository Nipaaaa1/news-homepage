import logo from "/images/logo.svg";
import iconMenu from "/images/icon-menu.svg";
import mobileWeb3 from "/images/image-web-3-mobile.jpg";
import gamingGrowth from "/images/image-gaming-growth.jpg";
import retroPcs from "/images/image-retro-pcs.jpg";
import topLaptops from "/images/image-top-laptops.jpg";

import data from "./data";

const App = () => {
  const images = [retroPcs, topLaptops, gamingGrowth];
  return (
    <main className="font-inter">
      <nav className="flex items-center justify-between px-4 pb-3 pt-7">
        <img className="h-7 w-max" src={logo} alt="Logo" />
        <img className="size-max" src={iconMenu} alt="Hamburger Menu" />
      </nav>
      <section className="flex flex-col gap-14 p-4">
        <section className="grid grid-cols-1 gap-4">
          <img className="h-max w-full" src={mobileWeb3} alt="Web 3 Image" />
          <h1 className="text-neutral-veryDarkBlue text-[2.6rem] font-extrabold leading-none">
            {data.mainArticle.title}
          </h1>
          <div className="space-y-4">
            <p className="text-neutral-darkGrayishBlue">
              {data.mainArticle.description}
            </p>
            <button className="bg-primary-softRed px-6 py-3 text-sm tracking-[0.25rem] text-white">
              READ MORE
            </button>
          </div>
        </section>
        <aside className="bg-neutral-veryDarkBlue flex flex-col gap-4 p-5">
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
        <ul className="flex flex-col gap-8">
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
