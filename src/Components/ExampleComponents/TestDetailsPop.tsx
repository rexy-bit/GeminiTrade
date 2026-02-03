import { memo } from "react";
import type { userInput } from "../../Contexts/Types";
import { useAiContext } from "../../Contexts/AiContext";


const TestDetailsPop = ({test, setShowPop} :  {test: userInput, setShowPop : (b : boolean)=>void}) => {

    const {setUserInput, getAiResponse, loadingAi} = useAiContext();
    const analyzeAi = async() => {

        setUserInput({
            productName: test.productName,
            country : test.country,
            ficheTech : test.ficheTech,
            decret : test.decret
        });

        await getAiResponse(test);

        setShowPop(false);
        document.getElementById("test")?.scrollIntoView({ behavior: "smooth" });
        
    }
    
    return(
              <div onClick={()=>setShowPop(false)} className="fixed inset-0 bg-black/40  flex justify-center z-50">
    
               <div className="flex flex-col shadow-2xl gap-2  w-[700px] h-[450px] bg-[#0F172A] border-5 border-[#1E2A47]  rounded-[20px] p-5 max-[1025px]:w-[500px] max-[550px]:w-[300px] mt-5 px-6 overflow-y-auto space-y-1 relative" onClick={(e) => e.stopPropagation()}>

                     <h1 className="text-center text-gray-100 font-bold text-[1.5em]">{test.productName}</h1>

                   <div className="absolute text-white top-0 right-3 cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 text-[2em]" onClick={()=>setShowPop(false)}>&times;</div>

                   <div className="flex flex-col mt-5">
                    
                     <div className="mt-5 text-gray-100 text-[15px]">
                        <strong>Product Name:</strong> {test.productName}
                     </div>
                     <div className="mt-3 text-gray-100 text-[15px]">
                        <strong>Country: </strong>{test.country}
                     </div>
                     <div className="mt-3 text-gray-100 text-[15px]">
                        <strong>Technical Sheet: </strong>{test.ficheTech}
                     </div>
                     {test.decret !== "" &&
                     <div className="mt-3 text-gray-100 text-[15px]">
                        <strong>Official Import Decree: </strong>{test.decret}
                     </div>
                      }
                   </div>

                   <button onClick={analyzeAi}
                 className="bg-[#2563EB] py-3 mb-10 mt-10  rounded-[5px] text-[14px] font-bold text-white transition-opacity duration-200 hover:opacity-70 active:opacity-50 cursor-pointer" 
                   >{loadingAi ? "Analyzing…" : "Check Importability"}</button>
                   
               </div>
               </div>
    )
}

export default memo(TestDetailsPop);