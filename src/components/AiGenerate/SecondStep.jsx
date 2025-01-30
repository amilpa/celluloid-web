import React, { useEffect } from "react";
import TextArea from "../TextArea";
import Sparkle from "../SvgComp/Sparkle";

export default function ({ save }) {
  const [abstract, setAbstract] = React.useState("");

  const [logline, setLogline] = React.useState("");
  const [centralMessage, setCentralMessage] = React.useState("");

  function validate() {
    const abstract = localStorage.getItem("abstract");
    if (abstract.length < 10) {
      alert("Abstract should be at least 50 characters long");
    } else {
      setNext(true);
    }
  }

  useEffect(() => {
    const abstract = localStorage.getItem("abstract");
    if (abstract) {
      setAbstract(abstract);
      // api call here
    }
  }, []);

  return (
    <div className="hero bg-base-100 min-h-screen min-w-screen  max-h-screen overflow-hidden absolute top-0 -z-10">
      <div
        className="bg-primary pointer-events-none absolute top-20 start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"
        style={{ left: "50%", translate: "-50% 0" }}
      ></div>
      <div
        className="bg-accent pointer-events-none absolute start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"
        style={{ top: "-10%", left: "-10%" }}
      ></div>
      <div
        className="bg-accent pointer-events-none absolute start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"
        style={{ top: "-10%", left: "89%" }}
      ></div>
      <div
        className="bg-primary pointer-events-none start-20 absolute top-3/4 aspect-square w-[1000px] rounded-full opacity-20 blur-3xl -translate-x-1/2"
        style={{ left: "50%" }}
      ></div>
      <div className="hero-content text-center mt-12 mb-0 bg-base-200 rounded-3xl p-12 shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Script generator</h1>

          <div className="mt-6">
            <h1 className="text-base-content opacity-70 text-sm font-medium text-left mb-2 ml-2">
              Abstract
            </h1>
            <TextArea
              onChange={(e) => {
                setAbstract(e.target.value);
                localStorage.setItem("abstract", e.target.value);
              }}
              rows={5}
              cols={60}
              placeholder={"Enter abstract..."}
              value={abstract}
            />
          </div>
          <div className="mt-3">
            <h1 className="text-base-content opacity-70 text-sm font-medium text-left mb-2 ml-2">
              LogLine
            </h1>
            <TextArea
              onChange={(e) => {
                setLogline(e.target.value);
                localStorage.setItem("logline", e.target.value);
              }}
              rows={2}
              cols={60}
              placeholder={"Enter logline..."}
              value={logline}
              classNames={"pb-4"}
            />
          </div>
          <div className="mt-3">
            <h1 className="text-base-content opacity-70 text-sm font-medium text-left mb-2 ml-2">
              Central Message
            </h1>
            <TextArea
              onChange={(e) => {
                setCentralMessage(e.target.value);
                localStorage.setItem("central-message", e.target.value);
              }}
              rows={1}
              cols={60}
              placeholder={"Enter central message..."}
              value={centralMessage}
              classNames={"pb-4"}
            />
          </div>
          <button className="btn btn-primary w-full btn-md relative mt-4">
            <span className="pr-2">Continue to generate</span>
            <div className="absolute top-3 right-[162px] w-5">
              <Sparkle />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
