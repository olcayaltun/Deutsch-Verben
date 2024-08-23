import React from "react";
import PrepositionTest from "./PrepositionTest"; // Dosya adı PrepositionTest.js olarak kaydedildiğini varsayıyorum

function App() {
  return (
    <div className=" mt-4">
      <h1 className=" text-white text-4xl grid place-items-center font-semibold mb-7 bg-slate-600 p-2  rounded-tl-[40px] rounded-br-[40px] max-md:w-[450px] ml-4">
        Verben mit Präpositionen
      </h1>
      <PrepositionTest />
    </div>
  );
}

export default App;
