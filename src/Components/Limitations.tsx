import { memo } from "react";

const Limitations = () => {

    const limitationsData = [
  {
    icon : "fa-solid fa-scale-unbalanced",
    title: "Not an official legal decision",
    description:
      "Gemini-Trade provides AI-assisted insights, not legally binding import approvals.",
  },
  {
    icon : "fa-solid fa-gavel",
    title: "Regulations may change",
    description:
      "Import laws and decrees evolve over time and may vary by interpretation.",
  },
  {
    icon : "fa-solid fa-keyboard",
    title: "Dependent on input quality",
    description:
      "Incomplete or inaccurate product descriptions can affect the analysis results.",
  },
  {
    icon : "fa-solid fa-person-circle-check",
    title: "Human validation required",
    description:
      "Critical or high-risk cases should always be reviewed by a qualified expert.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Decision-support tool",
    description:
      "Gemini-Trade is designed to assist professionals, not replace legal or regulatory authorities.",
  },
];

    return(
        <section className="flex flex-col justify-center items-center w-full bg-[#0B1220]" id="limitations">
            
            <h1 className="text-[2em] text-center font-bold text-gray-100 mt-20">Limitations & Responsible Use</h1>

            <div className="text-gray-200 text-[18px] font-[600] w-[600px] text-center mt-10 max-[650px]:w-[300px] max-[650px]:text-[16px]">
                While Gemini-Trade accelerates import compliance analysis using AI, final decisions should always account for regulatory updates, data accuracy, and expert validation. The limitations below define the responsible scope of the system.
            </div>
             <div className="mt-15 flex flex-wrap gap-10 justify-center items-center  mb-20">
                {limitationsData.map((d)=>{
                    return(
                        <div className="bg-[#0F172A] border border-white/5 border-5 p-5 w-[250px] rounded-[10px] border-white/5 flex flex-col items-center  gap-4 h-[260px] transition-transform duration-300 hover:scale-105 cursor-pointer" key={d.title}>
                            <i className={`${d.icon} text-[2.5em] text-gray-300`}></i>
                            <h3 className="text-[1.2em] font-bold leading-6 text-gray-200 text-center">{d.title}</h3>

                           <div className="text-[15px] text-gray-200 text-center font-[600]">
                            {d.description}
                           </div>

                            
                        </div>
                    )
                })}
             </div>
        </section>
    )
}

export default memo(Limitations);