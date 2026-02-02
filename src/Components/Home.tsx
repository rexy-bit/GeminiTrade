import { memo } from "react"


const Home = () => {

    return(
         <section className="flex flex-col w-full justify-center p-10 py-20 bg-gradient-to-b from-[#1E2A47] gap-5 to-[#0B1220]">

              <h1 className="text-[2em] text-white font-[poppins] font-bold max-[500px]:text-[1.7em]">Powered by Gemini 3</h1>
              <h2 className="text-[1.3em] font-bold text-gray-200 font-sans">AI-Powered Import Compliance Analysis</h2>

              <p className="font-sans text-[17px] text-gray-100 font-[600]">
                Analyze technical specifications and instantly detect whether a product
                is sensitive to import regulations, with clear legal justification.
              </p>

              <div className="flex flex-row items-center gap-5 ">
                <a className="w-[120px] text-[14px] bg-[#2563EB] h-[40px] font-sans font-bold text-white rounded-[5px] cursor-pointer flex justify-center items-center transition-transform duration-200 hover:scale-105 active:scale-100" href="#test">
                    Start Analysis
                </a>
                
                <a className="flex justify-center items-center w-[120px] text-[14px] font-bold bg-white text-[#1E2A47] h-[40px] font-bold font-sans rounded-[5px] cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60" href="#how">
                    How it works
                </a>
              </div>
         </section>
    );
}


export default memo(Home);