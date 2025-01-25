import TextArea from "../components/TextArea";
import Sparkle from "../components/SvgComp/Sparkle";

export default function AiGenerate() {
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
      <div className="hero-content text-center mt-12 mb-16 bg-base-200 rounded-3xl p-12 shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Script generator</h1>
          <div className="stats shadow mt-4">
            <div className="stat place-items-center">
              <div className="stat-title text-base">Generated</div>
              <div className="stat-value text-2xl">424</div>
              <div className="stat-desc mt-2">scripts in the last 24 hours</div>
            </div>
          </div>
          <div className="mt-6">
            <TextArea rows={5} cols={60} placeholder={"Enter abstract..."} />
          </div>
          <button className="btn btn-primary w-full btn-md relative mt-4">
            <span className="pr-2">Start generating</span>
            <div className="absolute top-3 right-[177px] w-5">
              <Sparkle />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
