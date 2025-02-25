import {useState} from "react"
import TextArea from "./TextArea";


export default function CharacterAttributes(){
    const [characterInfo,setChars]=useState([{character:"",attributes:""}]);
    const [charNum,setCharNum]=useState(1);

    const addCharacter=()=>{
        setChars([...characterInfo,{character:"",attributes:""}])
        setCharNum(charNum+1)
    }

    return (
        <div>
           
                {
                    characterInfo.map((row,index)=>(
                        <div key={index} className="flex"> 
                            <div className="flex flex-col">
                                <h1 className="text-base-content opacity-70 text-sm font-medium text-left mb-2 ml-2">
                                    Character {index+1}
                                </h1>

                                <TextArea
                                    value={row.character}
                                    rows={2}
                                    cols={30}
                                    placeholder={"Enter Character Name..."}
                                    />
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-base-content opacity-70 text-sm font-medium text-left mb-2 ml-2">
                                    Attributes
                                </h1>

                                <TextArea
                                    value={row.attributes}
                                    rows={2}
                                    cols={30}
                                    placeholder={"Enter Attributes..."}
                                    />
                            </div>
                        

                    </div>

                ))}
                

            <button className="btn btn-primary w-32 btn-md relative mt-4 mr-4" onClick={addCharacter}>
                <span>Add Character</span>
            </button>
            
            <button className="btn btn-primary w-32 btn-md relative mt-4 text-center">
                <span>Submit</span>
            </button>

        </div>
    )


}