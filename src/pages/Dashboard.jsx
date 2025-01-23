import React from "react";
import Card from "../components/Card";
import CreateCard from "../components/CreateCard";
import SearchInput from "../components/SearchInput";
import RecentCard from "../components/RecentCard";

export default function Dashboard() {
  return (
    <>
      <div className="pl-8 mt-12 flex items-center gap-6">
        <CreateCard />
        <RecentCard />
      </div>
      <div className="flex items-center justify-between px-8 mt-12">
        <h1 className="text-2xl font-semibold">All scripts</h1>
        <SearchInput />
      </div>
      <div className="h-[1px] bg-gray-700 mt-4"></div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-x-6 gap-y-8 px-8 mt-8 mb-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
