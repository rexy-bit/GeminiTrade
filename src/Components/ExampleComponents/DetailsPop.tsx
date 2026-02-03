import { memo } from "react";
import type { Example } from "../../Contexts/Types";


const DetailsPop = ({ex, setShowPop} : {ex : Example, setShowPop : (b : boolean)=>void}) => {

    return(
         <div onClick={()=>setShowPop(false)} className="fixed inset-0 bg-black/40  flex justify-center z-50">
    
               <div className="flex flex-col shadow-2xl gap-2  w-[700px] h-[450px] bg-[rgb(15,23,42)] border-5 border-[#1E2A47]  rounded-[20px] p-5 max-[1025px]:w-[500px] max-[550px]:w-[300px] mt-5 px-6 overflow-y-auto space-y-1 relative" onClick={(e) => e.stopPropagation()}>
                   <h1 className="text-center text-gray-100 font-bold text-[1.5em]">{ex.name}</h1>

                   <div className="absolute text-white top-0 right-3 cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 text-[2em]" onClick={()=>setShowPop(false)}>&times;</div>

                   <div className="flex flex-col mt-5">
                     <h2 className="text-gray-100 font-[600] text-[17px]">Inputs: </h2>
                     <div className="mt-5 text-gray-100 text-[15px]">
                        <strong>Product Name:</strong> {ex.name}
                     </div>
                     <div className="mt-3 text-gray-100 text-[15px]">
                        <strong>Country: </strong>{ex.country}
                     </div>
                     <div className="mt-3 text-gray-100 text-[15px]">
                        <strong>Technical Sheet: </strong>{ex.fiche}
                     </div>
                     {ex.decret !== "" &&
                     <div className="mt-3 text-gray-100 text-[15px]">
                        <strong>Official Import Decree: </strong>{ex.decret}
                     </div>
                      }
                   </div>

                   <div>
                   

                    <h1 className="text-[1.5em] text-gray-100 font-bold text-center underline mt-7">Gemini Response</h1>

                    <div className="text-[1em] text-gray-100 font-[500] mt-12">
                        <span>Verdict</span>:  {ex.aiResponse.status.toUpperCase()}
                    </div>

                   <div>
                    <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Summmary</h3>
                    <p className="text-gray-300 mt-2 text-[15px]">{ex.aiResponse.resume}</p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Reasons</h3>
                        <p className="text-gray-300 mt-2 text-[15px]">{ex.aiResponse.reasons}</p>
                    </div>

                    {ex.aiResponse.sensitivePart && (
                        <div className="mt-4">
                           <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Sensitive Part</h3>
                           <p className="text-gray-300 mt-2 text-[15px]">{ex.aiResponse.sensitivePart}</p>
                        </div>
                    )}

                    {ex.aiResponse.advices.length > 0 && (
                        <div className="mt-5">
                            <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Advices</h3>
                            <div className="pl-5 mt-3 ">
                                {ex.aiResponse.advices.map((advice)=>{
                                    return(
                                        <li key={advice} className="text-gray-200 text-[15px]">{advice}</li>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    
                
                   </div>
               </div>
        </div>
    )
}

export default memo(DetailsPop);