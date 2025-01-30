import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import Progress from "../components/Progress";

export default function () {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const id = query.get("id");
  }, []);

  return (
    <div className="pt-16">
      <div className="px-32 flex gap-12 relative">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjZhY2E0ZTQtMzYzYy00N2MxLTk5NWEtYjFhOWU3MzU4MzkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt=""
          className="h-[300px] w-[200px] object-cover border-2 border-accent"
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
        </div>
        <div className="absolute top-8 right-40 scale-150">
          <Progress />
        </div>
      </div>
      <div className="px-28 mt-16">
        <div className="bg-base-content h-[1px] w-full"></div>
      </div>
    </div>
  );
}
