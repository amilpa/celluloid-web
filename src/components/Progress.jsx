import React from "react";

export default function Progress() {
  return (
    <div
      className="radial-progress text-accent"
      style={{ "--value": 70 }}
      role="progressbar"
    >
      70%
    </div>
  );
}
