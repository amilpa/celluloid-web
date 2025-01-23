import Plus from "./SvgComp/Plus";

export default function CreateCard() {
  return (
    <div className="card bg-neutral relative shadow-lg w-[300px] h-[200px] flex flex-row justify-center items-center cursor-pointer border border-transparent transition-all hover:border-success">
      <div className="scale-75 absolute left-14">
        <Plus />
      </div>
      <span className="font-semibold">Create new script</span>
    </div>
  );
}
