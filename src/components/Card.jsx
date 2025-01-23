import React from "react";

export default function Card() {
  return (
    <div className="card card-side bg-base-100 shadow-xl items-center w-[480px] h-[200px] cursor-pointer">
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
          <button className="btn btn-primary">Open</button>
        </div>
      </div>
    </div>
  );
}
