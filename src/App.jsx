import React, { useState } from 'react'
import cart from './cart.svg'
import search from './search.svg'
import './App.css'
import NavItem from './nav-item';
import Right from './chevron-right.jsx';
import Cube from './cube';
import PortfolioItem from './portfolio-item';
import Command from './command';
import Feather from './feather';

const portfolioItems = [
  { icon: <Cube size={96} />,
    label: 'Design',
    description: 'A full stack all around designer that may or may not include a guide for specific creative people'
  },
  { icon: <Command size={96} />,
    label: 'Develop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { icon: <Feather size={96} />,
    label: 'Write',
    description: 'Donec ullamcorper sollicitudin augue, sed venenatis nulla suscipit in.'
  },
  { icon: <Cube size={96} />,
    label: 'Promote',
    description: 'Nunc scelerisque lacinia orci non ultrices. Maecenas molestie rhoncus felis, ut tincidunt odio pretium in'
  }
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="flex py-2 shadow sticky top-0 z-20 bg-white">
        <nav className="flex flex-grow">
          <div className="flex items-center ml-auto font-bold">
            <NavItem>Demos</NavItem>
            <NavItem className="ml-2">Pages</NavItem>
            <NavItem className="ml-2">Portofolios</NavItem>
          </div>
        </nav>
        <div className="flex-grow" />
        <div className="flex flex-grow">
          <img src={cart} />
          <img className="ml-4" src={search} />
          <input className="ml-4 p-1 border border-black rounded-md" />
        </div>
      </header>
      <div className="mt-1 bg-white shadow-lg">
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
              <button className="mt-8 bg-green-500 py-2 px-4 rounded-full flex items-center mx-auto">
                Request a quote
                <Right />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 pb-4 flex flex-col items-center mx-auto text-gray-500 mt-8">
          <div className="font-dancing text-3xl">
            Catering service in New York
          </div>
          <div className="mt-8 font-bold text-4xl text-blue-800">
            We specialize in corporate and private events
          </div>
          <p className="mt-8">
            With 20 years of experience, we promise you the freshest, local ingredients,  hand-crafted cooking sprinkled with our unique whimsical elegance and exceptional service.
          </p>
        </div>
      </div>
      <footer className="pt-4 mt-2 bg-white shadow-lg">
        <div className="flex bg-alt-1 text-gray-400">
          <div className="flex w-2/12 text-white text-lg bg-gray-700 items-center justify-center italic">
            My Portofolios
          </div>
          <div className="flex flex-wrap w-6/12 px-8 content-start justify-center text-left">
            {portfolioItems.map(item => (
              <PortfolioItem {...item} key={item.label} />
            ))}
          </div>
          <div className="p-4 bg-alt-1 w-4/12 text-left">
            <div className=" text-red-500">
              Services
            </div>
            <p className="mt-6 text-sm">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className="mt-6 text-xs">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className="mt-6 text-xs">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
