import Sparkle from "../assets/ai.svg";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-100 min-h-screen  max-h-screen overflow-hidden absolute top-0 -z-10">
      <div className="bg-primary pointer-events-none absolute top-20 start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"></div>
      <div
        className="bg-success pointer-events-none absolute top-[48%] start-20 aspect-square w-full rounded-full opacity-10 blur-3xl [transform:translate3d(0,0,0)]"
        style={{ left: "50%" }}
      ></div>
      <div className="hero-content text-center mt-8">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">
            Experience <span className="text-success">Script Writing</span> Like
            never before
          </h1>
          <p className="py-6 max-w-lg mb-6">
            Effortlessly craft compelling movie scripts with our powerful AI
            tools. Get started for free and see the magic happen.
          </p>
          <button
            className="btn btn-lg btn-wide relative"
            onClick={() => navigate("/generate")}
          >
            <span className="pr-2">Create with AI</span>
            <img
              src={Sparkle}
              alt="insert icon here"
              className="absolute top-4 right-[52px] w-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
