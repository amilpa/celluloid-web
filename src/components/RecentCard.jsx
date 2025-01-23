import React from "react";

export default function RecentCard() {
  return (
    <div className="card bg-base-100 image-full w-96 h-[200px] shadow-xl">
      <figure className="w-full">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjZhY2E0ZTQtMzYzYy00N2MxLTk5NWEtYjFhOWU3MzU4MzkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Recently accessed</h2>
        <p>Spider man - Last edited on 24/24/2020</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Open</button>
        </div>
      </div>
    </div>
  );
}
