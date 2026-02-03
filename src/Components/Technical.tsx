import { memo } from "react"

const technicalDetailsData = [
  {
    title: "Simplified Hackathon Architecture",
    description:
      "A backend has been implemented, but for this hackathon demo, the AI API is called directly from the frontend to ensure fast, seamless testing without deployment issues.",
  },
  {
    title: "Trade-offs & Technical Choices",
    description:
      "Direct API calls improve demo speed but have security limitations. Using the backend in a future version will enhance security, scalability, and data handling.",
  },
  {
    title: "Hackathon vs Future Version",
    description:
      "Hackathon version uses text inputs to simplify evaluation. Future improvements will allow uploading technical datasheets and official decrees for more accurate results.",
  },
  {
    title: "Technologies Used",
    description:
      "Frontend: React + Tailwind; AI API integration directly in frontend for speed; temporary data stored in localStorage; backend exists and can be integrated later; deployed via Vercel for smooth evaluation.",
  },
];

const TechnicalDetails = () => {

    return(
        <section className="flex flex-col justify-center items-center bg-[#0B1220]" id="more">
            <h1 className="text-[2em] text-center font-bold text-gray-100 mt-20">More Technical Details</h1>

                         <div className="mt-15 flex flex-wrap gap-10 justify-center items-center  mb-20">
                {technicalDetailsData.map((d)=>{
                    return(
                        <div className="bg-[#0F172A] border border-white/5 border-5 p-5 w-[300px] rounded-[10px] border-white/5 flex flex-col items-center  gap-4 h-[250px] transition-transform duration-300 hover:scale-105 cursor-pointer" key={d.title}>
                           
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

export default memo(TechnicalDetails);