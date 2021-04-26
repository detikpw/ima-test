import React, { useState, useCallback } from "react";
import "./App.css";
import { ChevronRight as Right } from "./icons";
import SideNav from "./side-nav";
import Wave from './wave';
import Header from './header';
import Footer from './footer';


function App() {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = useCallback(() => setMenu(!isMenuOpen), [isMenuOpen]);

  return (
    <div className="App relative">
      <SideNav isSeen={isMenuOpen} />
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="mt-1 bg-white shadow-lg">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1564697366559-f2b400ce529a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440q=80" />
          <div className="absolute inset-0 bg-opacity-30 bg-black text-white flex flex-col items-center">
            <div className="mt-5 lg:mt-10 lg:w-1/2">
              <div className="lg:text-4xl font-dancing">
                Catering should be an experience
              </div>
              <div className="mt-2 lg:mt-4 lg:text-5xl font-bold">
                We use only the finest and freshest ingredients
              </div>
              <div className="mt-2 lg:mt-8 lg:text-lg leading-none lg:leading-normal">
                At Sway catering we know that food is an important part of life.
                If the meal is not perfect, your event cannot be perfect
              </div>
              <button className="mt-4 lg:mt-8 bg-green-500 py-2 px-4 rounded-full flex items-center mx-auto">
                Request a quote
                <Right />
              </button>
            </div>
          </div>
          <div className="absolute -bottom-px left-0 right-0 h-auto">
            <Wave />
          </div>
        </div>
        <div className="px-2 lg:px-0 lg:w-1/2 pb-4 flex flex-col items-center mx-auto text-gray-500 mt-8">
          <div className="font-dancing text-3xl">
            Catering service in New York
          </div>
          <div className="mt-8 font-bold text-4xl text-blue-800">
            We specialize in corporate and private events
          </div>
          <p className="mt-8">
            With 20 years of experience, we promise you the freshest, local
            ingredients, hand-crafted cooking sprinkled with our unique
            whimsical elegance and exceptional service.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
