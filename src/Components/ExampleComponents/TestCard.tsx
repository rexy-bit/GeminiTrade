import { memo, useState } from "react"
import type { userInput } from "../../Contexts/Types";
import TestDetailsPop from "./TestDetailsPop";


const TestCard = ({test} : {test : userInput}) => {

    const [showPop, setShowPop] = useState<boolean>(false);

    return(
        <>
        <div className="w-[300px] bg-[#111A2E] border-5 border-[#1E2A47] rounded-[10px] p-2 h-[150px] flex flex-col justify-center items-center gap-2 transition-transform duration-300 hover:scale-105">

            <p className="text-[18px] text-gray-300 font-[600] text-center leading-5">{test.productName}</p>
            <p className="text-[17px] text-gray-100 font-bold">{test.country}</p>
            <button className="bg-[#2563EB] h-[40px] w-[120px] rounded-[5px] text-[14px] font-bold text-white transition-opacity duration-200 hover:opacity-70 active:opacity-50 cursor-pointer" 
            onClick={()=>setShowPop(true)}
            >View Details</button>
        </div>

        {showPop && <TestDetailsPop test={test} setShowPop={setShowPop} />}
        </>
    )
}

export default memo(TestCard);