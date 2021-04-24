import React, { useState } from 'react'
import cart from './cart.svg'
import search from './search.svg'
import down from './chevron-down.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="flex py-2 shadow sticky top-0 z-20 bg-white">
        <nav className="flex flex-grow">
          <div className="flex ml-auto font-bold">
            <a>
              Demos
              <img className="inline" src={down} />
            </a>
            <a className="ml-2">Pages</a>
            <a className="ml-2">Portofolios</a>
          </div>
        </nav>
        <div className="flex-grow" />
        <div className="flex flex-grow">
          <img src={cart} />
          <img className="ml-4" src={search} />
          <input className="ml-4 border border-black rounded-md" />
        </div>
      </header>
      <div className="mt-1">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1564697366559-f2b400ce529a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440q=80" />
          <div className="absolute inset-0 bg-opacity-30 bg-black text-white flex flex-col items-center">
            <div className="mt-10 w-1/2">
              <div className="text-4xl font-dancing">
                Catering should be an experience
              </div>
              <div className="mt-4 text-5xl font-bold">
                We use only the finest and freshest ingredients
              </div>
              <div className="mt-8 text-lg font-bold">
                At Sway catering we know that food is an important part of life. If the meal is not perfect, your event cannot be perfect
              </div>
              <button className="mt-8 bg-green-500 py-2 px-4 rounded-full">
                Request a quote
              </button>
            </div>
          </div>
        </div>
        <div>
          Catering service in New York
        </div>
        <div>
          We specialize in corporate and private events
        </div>
        <p>
          With 20 years of experience, we promise you the freshest, local ingredients,  hand-crafted cooking sprinkled with our unique whimsical elegance and exceptional service.
        </p>
      </div>
      <footer className="flex">
        <div className="w-2/12">
          My Portofolios
        </div>
        <div className="flex flex-wrap w-7/12 content-start">
          <div className="w-1/2">
            <div>
              Design
            </div>
            <p>
              A full stack all around designer that may or may not include a guide for specific creative people
            </p>
          </div>
          <div className="w-1/2">
            <div>
              Develop
            </div>
            <p>
              A full stack all around designer that may or may not include a guide for specific creative people
            </p>
          </div>
          <div className="w-1/2">
            <div>
              Write
            </div>
            <p>
              A full stack all around designer that may or may not include a guide for specific creative people
            </p>
          </div>
          <div className="w-1/2">
            <div>
              Promote
            </div>
            <p>
              A full stack all around designer that may or may not include a guide for specific creative people
            </p>
          </div>
        </div>
        <div className="w-3/12">
          <div>
            Services
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
