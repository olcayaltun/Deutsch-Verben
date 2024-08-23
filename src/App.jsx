import React from "react";
import PrepositionTest from "./PrepositionTest"; // Dosya adı PrepositionTest.js olarak kaydedildiğini varsayıyorum

function App() {
  return (
    <div className=" mt-4 grid place-items-center">
      <h1 className=" text-white text-4xl grid place-items-center font-semibold mb-7 bg-slate-600 p-2  rounded-tl-[40px] rounded-br-[40px] max-md:w-[400px]  max-md:text-lg ">
        Verben mit Präpositionen
      </h1>
      <PrepositionTest />

      <a href="https://www.instagram.com/lcy.ltn/">
        {" "}
        <h2 className="text-white border border-rose-500 mt-[-10px] p-1 rounded-lg hover:scale-95 hover:bg-rose-400">
          @lcy.ltn
        </h2>
      </a>
    </div>
  );
}

export default App;
