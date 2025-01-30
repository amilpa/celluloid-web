import FirstStep from "../components/AiGenerate/FirstStep";
import SecondStep from "../components/AiGenerate/SecondStep";

import { useState } from "react";

export default function AiGenerate() {
  const [nextStep, setNextStep] = useState(false);

  function saveToLocalStorage(e) {
    localStorage.setItem("abstract", e.target.value);
  }

  return nextStep ? (
    <SecondStep />
  ) : (
    <FirstStep save={saveToLocalStorage} setNext={setNextStep} />
  );
}
