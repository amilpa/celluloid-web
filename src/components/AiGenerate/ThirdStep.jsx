import React, { useEffect } from "react";
import TextArea from "../TextArea";
import Sparkle from "../SvgComp/Sparkle";

export default function ({ saveAbstract, setNext}) {
  const [abstract, setAbstract] = React.useState("");
  const [logline, setLogline] = React.useState("");
  const [centralmsg,setCentralMsg] = React.useState("")

  function validate() {
    const abstract = localStorage.getItem("abstract");
    if (abstract.length < 10) {
      alert("Abstract should be at least 50 characters long");
    } else {
      setNext(3);
    }
  }

  useEffect(() => {
    const abstract = localStorage.getItem("abstract");
    const logline = localStorage.getItem("logline")

    if (abstract) {
      setAbstract(abstract);
      // api call here
      //why do we need an API call here?-Joel
    }

    if(logline){
      setLogline(logline);
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
              rows={2}
              cols={60}
              placeholder={"Enter logline..."}
              value={logline}
              classNames={"pb-4"}
            />
          </div>

          {/* i decided to remove the disabled attribute and instead removed the onchange attribute for abstract and logline */}
          {/* since disabling them results in greying out the box entirely...or you gotta make changes in that */}

          <div className="mt-6">
            <h1 className="text-base-content opacity-70 text-sm font-medium text-left mb-2 ml-2">
              Abstract
            </h1>
            <TextArea
              onChange={(e) => {
                setCentralMsg(e.target.value)
                localStorage.setItem("central-message",e.target.value)
              }}
              rows={3}
              cols={60}
              placeholder={"Enter Central Message..."}
              value={centralmsg}
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
