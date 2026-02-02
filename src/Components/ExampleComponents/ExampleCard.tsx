import { memo, useState } from "react";
import type { Example } from "../../Contexts/Types";
import DetailsPop from "./DetailsPop";


const ExampleCard = ({ex} : {ex: Example}) => {

    const [showPopDetails, setShowPopDetails] = useState<boolean>(false);
    
    return(
        <>
        <div className="bg-[#111A2E] border-5 border-[#1E2A47] rounded-[10px] p-5 w-[300px] h-[400px] flex flex-col gap-1 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-100">
            <h3 className="text-gray-100 text-[18px] font-bold text-center">{ex.name}</h3>
            <p className="text-[16px] font-bold text-gray-200 mt-1">Status: {ex.aiResponse.status}</p>
            <p className="text-[15px] font-bold text-gray-200">Country: {ex.country}</p>
            <p className="text-[15px] text-gray-300 leading-5 mt-1">{ex.aiResponse.resume}</p>

            <button className="bg-[#2563EB] h-[40px] text-white font-[600] rounded-[5px] mt-5 text-[16px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer"
            onClick={()=>setShowPopDetails(true)}
            >Details</button>
        </div>

        {showPopDetails && <DetailsPop ex={ex} setShowPop={setShowPopDetails}/>}
        </>
    );
}

export default memo(ExampleCard);