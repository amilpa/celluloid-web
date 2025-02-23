import FirstStep from "../components/AiGenerate/FirstStep";
import SecondStep from "../components/AiGenerate/SecondStep";

import { useState } from "react";
import ThirdStep from "../components/AiGenerate/ThirdStep";

export default function AiGenerate() {
  const [nextStep, setNextStep] = useState(1);
  //since you might need a 3rd step...i am changing this from a boolean to an integer
  //1 means firstStep,2 means 2ndStep, 3 means 3rdStep

  function saveAbstractToLocalStorage(e) {
    localStorage.setItem("abstract", e.target.value);
  }

  function saveGenreToLocalStorage(e){
    localStorage.setItem("genre",e.target.value);
  }

  switch(nextStep){
    case 1: return <FirstStep saveAbstract={saveAbstractToLocalStorage} saveGenre={saveGenreToLocalStorage} setNext={setNextStep}/>
    case 2: return <SecondStep saveAbstract={saveAbstractToLocalStorage} setNext={setNextStep}/>
    case 3: return <ThirdStep/>
    default: return null;
    //maybe an easter egg 😏 instead of null?
  }
}
