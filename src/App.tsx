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

        <h2 className="text-5xl p-5 my-10 font-bold tracking-widest hero-text">
          Your Images. Brought to Life.
        </h2>

        <div className="flex flex-col gap-10">
          <div className="flex mx-auto flex-row gap-5">
            <div className="flex justify-center flex-col w-[40%]">
              <h1 className="text-2xl mb-2 text-left">hello world</h1>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi quam repellendus distinctio sint, earum, in id, amet
                dolorem voluptates ipsam debitis quisquam ad quas? Quaerat modi
                nostrum deleniti iste assumenda.
              </p>
            </div>
            <SevenWonders />
          </div>

          <img src="sample.png" className="w-2/3 mx-auto" />

          <div className="flex mx-auto flex-row-reverse gap-5">
            <div className="flex justify-center text-left flex-col w-[40%]">
              <h1 className="text-2xl mb-2">hello world</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                rem dolor minima, accusantium inventore quisquam amet suscipit
                quidem quos atque hic aut nostrum vel tenetur earum quo iure
                reiciendis magnam?
              </p>
            </div>
            <EOHMap />
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
