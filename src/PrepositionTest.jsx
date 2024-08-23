import React, { useState, useEffect } from "react";
import { sätze as data } from "./assets/Veri";

const PrepositionTest = () => {
  const [inputValues, setInputValues] = useState(Array(data.length).fill(""));
  const [inputBgColors, setInputBgColors] = useState(
    Array(data.length).fill("")
  );
  const [sentenceVisible, setSentenceVisible] = useState(
    Array(data.length).fill(false)
  );

  useEffect(() => {
    // Initially hide all sentences
    setSentenceVisible(Array(data.length).fill(false));
  }, []);

  function getAfterSpace(verb) {
    const parts = verb.split(" ");
    return parts.length > 1 ? parts.slice(1).join(" ") : verb;
  }

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleCheck = (index) => {
    const newInputBgColors = [...inputBgColors];
    if (inputValues[index] === data[index].präposition) {
      newInputBgColors[index] = "bg-green-500";
    } else {
      newInputBgColors[index] = "bg-red-500";
    }
    setInputBgColors(newInputBgColors);
  };

  const toggleSentenceVisibility = (index) => {
    const newVisibility = [...sentenceVisible];
    newVisibility[index] = !newVisibility[index];
    setSentenceVisible(newVisibility);
  };

  return (
    <div>
      <div className=" text-white grid place-items-center">
        <div>
          {data.map((i, index) => {
            const result = getAfterSpace(i.verben);
            return (
              <div
                key={index}
                className="flex gap-2 px-5 mb-5 justify-between shadow-md shadow-violet-700 bg-[#323131] p-2 flex-wrap max-w-[1000px]  ml-12 items-center min-w-[800px] max-md:min-w-[400px]"
              >
                <div className="flex justify-between items-center gap-2">
                  {i.reflexiv && (
                    <p className="bg-blue-500 p-1 text-white rounded-md">
                      {i.reflexiv}
                    </p>
                  )}
                  <p className="bg-yellow-500 p-1 text-white rounded-md">
                    {result}
                  </p>
                  <input
                    id={`fb-${index}`}
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className={`p-1 text-black border border-zinc-400 rounded-md w-12 outline-none ${inputBgColors[index]}`}
                    type="text"
                  />
                  <button
                    onClick={() => handleCheck(index)}
                    className="bg-green-500 p-1 rounded-full hover:bg-green-700"
                  >
                    Lösung
                  </button>
                </div>
                <div className="flex justify-between gap-2 items-center">
                  {sentenceVisible[index] && <p>{i.satz}</p>}
                  <button
                    onClick={() => toggleSentenceVisibility(index)}
                    className="font-bold size-4 text-2xl bg-black rounded-full grid place-items-center w-8 h-8 hover:bg-zinc-500"
                  >
                    {sentenceVisible[index] ? "-" : "+"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrepositionTest;
