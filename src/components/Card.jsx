import React from "react";
import Delete from "./SvgComp/Delete";

import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();

  return (
    <div className="card card-side bg-neutral group shadow-xl items-center w-[480px] h-[200px] cursor-pointer border border-transparent hover:border-primary transition-all">
      <figure>
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjZhY2E0ZTQtMzYzYy00N2MxLTk5NWEtYjFhOWU3MzU4MzkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Spider man</h2>
        <p className="w-64">
          A guy gets bitten by a spider and then dies for no reason cause he
          scared.
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary opacity-0 group-hover:opacity-100"
            onClick={() => navigate("/script")}
          >
            Open
          </button>
          <button className="btn px-2 btn-error opacity-0 group-hover:opacity-100">
            <div className="scale-50">
              <Delete />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
