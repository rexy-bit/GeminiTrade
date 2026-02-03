import { memo } from "react";

const RoadMap = () => {

    const roadmapData = [
  {
    title: "Multi-country legal database",
    description: "Access updated import regulations for multiple countries.",
  },
  {
    title: "HS Code auto-detection",
    description: "Automatically identify HS codes from product info for compliance.",
  },
  {
    title: "Upload technical datasheet & decree",
    description: "Future input feature to improve accuracy using official documents.",
  },
  {
    title: "Enterprise dashboard",
    description: "Centralized interface for compliance teams to manage imports efficiently.",
  },
  {
    title: "Public API integration",
    description: "Allow third-party apps to connect and verify products programmatically.",
  },
  {
    title: "Continuous AI improvement",
    description: "Feedback-driven learning for faster and more accurate decisions.",
  },
];

    return(
        <section className="flex flex-col justify-center items-center bg-[#0B1220]">

            <h1 className="text-[2em] text-center font-bold text-gray-100 mt-20">Roadmap & Future Improvements</h1>

            <div className="flex flex-col justify-center items-center mt-10 w-[600px] gap-5">
                <p className="text-[17px] font-[600] text-gray-100 text-center">
                    Gemini-Trade has the potential to become a full-fledged SaaS startup, providing AI-powered import compliance assistance for authorities. Customs officers face stressful and complex decisions when assessing sensitive materials, and Gemini-Trade can help reduce errors and speed up the process. 
                </p>
                <p className="text-[17px] font-[600] text-gray-100 text-center">
                    For this hackathon version, inputs are text-based to simplify testing and provide a smooth evaluation experience for the jury. Future improvements could include uploading the product’s technical datasheet and the official decree of the selected country, making the analysis even more accurate and reliable.
                </p>
            </div>

             <div className="mt-15 flex flex-wrap gap-10 justify-center items-center  mb-20">
                {roadmapData.map((d)=>{
                    return(
                        <div className="bg-[#0F172A] border border-white/5 border-5 p-5 w-[250px] rounded-[10px] border-white/5 flex flex-col items-center  gap-4 h-[200px] transition-transform duration-300 hover:scale-105 cursor-pointer" key={d.title}>
                           
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


export default memo(RoadMap);
