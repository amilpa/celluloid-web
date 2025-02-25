import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import "./Style.css";

import MDEditor from "@uiw/react-md-editor";
import CharacterAttributes from "../CharacterAttributes";

export default function Editor() {
  const [value, setValue] = useState("**Hello world!!!**");
  const location=useLocation();
  const params=location.state;

  return (
    <div className="px-16 pt-4">
      <h1 className="text-2xl font-medium mb-6 pl-2">{params.title}</h1>
      <div className="shadow-xl">
        {
        params.phase==="character"?<CharacterAttributes/>:
          <MDEditor 
          value={value} 
          height={"550px"} 
          onChange={setValue} 
          style={{ backgroundColor: "#2a323c" }}/>
        }
      </div>
    </div>
  );
}
