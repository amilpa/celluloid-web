import { useNavigate } from "react-router-dom";

export default function PhaseCard({ title, icon, id, phase }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/editor?phase=" + phase + "&id=" + id)}
      className="card bg-neutral relative shadow-lg w-[300px] h-[200px] flex flex-row justify-center items-center cursor-pointer border border-transparent transition-all hover:border-success"
    >
      <div className="scale-75 absolute left-14">{icon}</div>
      <span className="font-semibold">{title}</span>
    </div>
  );
}
