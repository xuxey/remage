import { Icon } from "@iconify/react/dist/iconify.js";
import "./App.css";
import { EOHMap } from "./remages/eoh-map";
import { SevenWonders } from "./remages/seven-wonders";

function App() {
  return (
    <>
      <div className="font-sans">
        <span className="flex flex-row justify-between items-center mb-5">
          <h1 className="text-5xl">Remage</h1>
          <span className="flex flex-row gap-5">
            <a
              className="text-blue-400 hover:text-blue-500 duration-300 flex flex-row gap-2"
              href="https://github.com/xuxey/remage"
            >
              <Icon className="duration-300 text-2xl" icon="uil:github" />
              <p>GitHub Repo</p>
            </a>
            <p className="text-red-300">Made with {"<3"}</p>
          </span>
        </span>

        <h2 className="text-5xl p-5 my-12 font-bold tracking-widest hero-text">
          Your Images. Brought to Life.
        </h2>

        <div className="flex flex-col gap-10">
          <div className="flex mx-auto flex-col md:flex-row gap-5">
            <div className="flex justify-center flex-col md:w-[40%] mx-auto">
              <h1 className="text-2xl mb-2 text-left hero-text">
                Remage the Seven Wonders.
              </h1>
              <p className="text-center md:text-left">
                <p>hover over the pins to learn more.</p>
                <p>zoom, pinch, pan to interact.</p>
                <p>search via search bar.</p>
              </p>
            </div>
            <SevenWonders />
          </div>

          <div className="flex flex-col mt-4">
          <h1 className="text-3xl font-bold tracking-wider hero-text">Minimal Code. Maximum Results.</h1>
          <img src="sample.png" className="md:w-2/3 mx-auto" />
          </div>

          <div className="flex mx-auto flex-col md:flex-row-reverse gap-5">
            <div className="flex justify-center text-left flex-col md:w-[60%] mx-auto">
              <h1 className="text-2xl mb-2 hero-text">Remage the Illinois Campus.</h1>
              <p className="text-center md:text-left">
                <p>Quiz yourself on our campus buildings.</p>
                <p> zoom, pinch, pan to interact.</p>
                <p>Search via search bar.</p>
              </p>
            </div>
            <EOHMap />
          </div>

          <div className="text-m text-left mx-auto">
            <p className="text-center text-2xl mb-2 font-semibold hero-text">
              Remage supports
            </p>

            <ul className="list-disc px-3">
              <li>
                Cross platform support for zooming and panning (thanks to
                react-zoom-pan-pinch)
              </li>
              <li>
                Fully customizable interactables that scale and move with the
                base image
              </li>
              <li>
                Reusable interactable components, with more advanced
                interactables coming soon!
              </li>
              <li>Freedom to Mix & Match any combination of interactables</li>
              <li>Built-in keyword based search</li>
              <li>Typescript support</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          Copyright 2023
        </div>
      </div>
    </>
  );
}

export default App;
