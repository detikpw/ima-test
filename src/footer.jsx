import React from "react";
import PortfolioItem from './portfolio-item';
import Cube from "./cube";
import Command from "./command";
import Feather from "./feather";
import ThumbsUp from "./thumbs-up";

const portfolioItems = [
  {
    icon: <Cube size={96} />,
    label: "Design",
    description:
      "A full stack all around designer that may or may not include a guide for specific creative people",
  },
  {
    icon: <Command size={96} />,
    label: "Develop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <Feather size={96} />,
    label: "Write",
    description:
      "Donec ullamcorper sollicitudin augue, sed venenatis nulla suscipit in.",
  },
  {
    icon: <ThumbsUp size={96} />,
    label: "Promote",
    description:
      "Nunc scelerisque lacinia orci non ultrices. Maecenas molestie rhoncus felis, ut tincidunt odio pretium in",
  },
];
const footer = () => (
  <footer className="pt-4 mt-2 bg-white shadow-lg">
    <div className="flex lg:flex-row flex-col bg-alt-1 text-gray-400">
      <div className="flex lg:w-2/12 text-white text-lg bg-gray-700 items-center justify-center italic">
        My Portofolios
      </div>
      <div className="flex flex-wrap lg:w-6/12 px-8 content-start justify-center text-left">
        {portfolioItems.map((item) => (
          <PortfolioItem {...item} key={item.label} />
        ))}
      </div>
      <div className="flex flex-col p-4 bg-alt-1 lg:w-4/12 text-left">
        <div className=" text-red-500">Services</div>
        <p className="mt-6 text-sm">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className="mt-6 text-xs">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className="mt-6 text-xs">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <span className="pt-4 mt-auto text-red-500 text-xs">
          cover <a href="https://unsplash.com/photos/cdRUE5bHCGc">photo</a> by{" "}
          <a href="https://unsplash.com/@natejohnston">Nate Johnston</a> and
          icon from <a href="https://feathericons.com/">Feather Icons</a>
        </span>
      </div>
    </div>
  </footer>
);

export default footer;
