export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen max-h-screen overflow-hidden absolute top-0 -z-10">
      <div className="bg-primary pointer-events-none absolute top-20 start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"></div>
      <div className="bg-success pointer-events-none absolute top-2/4 left-2/3 start-20 aspect-square w-[30rem] rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"></div>
      <div className="hero-content text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">
            Experience Script Writing Like never before
          </h1>
          <p className="py-6 max-w-lg mb-6">
            Effortlessly craft compelling movie scripts with our powerful AI
            tools. Get started for free and see the magic happen.
          </p>
          <button className="btn btn-primary w-max">Create with AI</button>
        </div>
      </div>
    </div>
  );
}
