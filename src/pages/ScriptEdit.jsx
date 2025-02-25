import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import Progress from "../components/Progress";
import PhaseCard from "../components/PhaseCard";
import Delete from "../components/SvgComp/Delete";
import Download from "../components/SvgComp/Download";

export default function () {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const id = query.get("id");
  }, []);

  return (
    <div className="pt-16 mb-16">
      <div
        className="bg-primary pointer-events-none absolute start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)] -z-10"
        style={{ top: "-10%", left: "-10%" }}
      ></div>
      {/* <div
        className="bg-primary pointer-events-none absolute start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)] -z-10"
        style={{ top: "-10%", left: "89%" }}
      ></div> */}
      <div className="px-32 flex gap-12">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjZhY2E0ZTQtMzYzYy00N2MxLTk5NWEtYjFhOWU3MzU4MzkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt=""
          className="h-[300px] w-[200px] object-cover"
        />
        <div>
          <h1 className="text-base-content text-3xl font-medium mt-2">
            Christian brothers
          </h1>
          <h2 className="text-base-content text-base mt-8">
            Action / Crime / Drama / Thriller
          </h2>
          <h2 className="text-base-content text-base">
            Created on - 12th June 2021
          </h2>
          <div className="scale-75 justify-self-start items-end -translate-x-2 mt-3">
            <Progress />
          </div>
          <div className="mt-4 flex gap-3">
            <button className="btn btn-primary w-12 h-12">
              <div className="scale-75">
                <Download />
              </div>
            </button>
            <button className="btn btn-error w-12 h-12">
              <div className="scale-75">
                <Delete />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="px-28 mt-16">
        <div className="bg-base-content bg-opacity-40 h-[1px] w-full"></div>
      </div>
      <div className="px-28 mt-16">
        <div className="grid place-items-center grid-cols-5">
          <PhaseCard title={"Character Setup"} phase={"character"} id={"id"} />
          <PhaseCard title={"Act I"} phase={"act1"} id={"id"} />
          <PhaseCard title={"Act II"} phase={"act2"} id={"id"}/>
          <PhaseCard title={"Act III"} phase={"act3"} id={"id"}/>
          <PhaseCard title={"Outline"} phase={"outline"} id={"id"}/>
        </div>
      </div>
    </div>
  );
}
