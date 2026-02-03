import { memo } from "react"


const How = () => {

    const data = [
        {
            icon : "https://res.cloudinary.com/dub4fhabm/image/upload/v1769980114/932d1f06-1ff5-4db7-b46d-833ea46aeeff.png",
            title: "Product Information",
            info : "Select the destination country and provide the product’s technical specifications."

        }, {
            icon : "https://res.cloudinary.com/dub4fhabm/image/upload/v1769980142/c5d4e904-36c6-4ef8-900d-b42f64517101.png",
            title: "Regulation-Aware AI Analysis",
            info : "Gemini-Trade analyzes the product using country-specific import regulations and identifies potential compliance risks."

        }, {
            icon : "https://res.cloudinary.com/dub4fhabm/image/upload/v1769980157/ed48b778-cce5-46ca-a051-de6358ccdf23.png",
            title: "Clear Decision & Legal Insight",
            info : "Receive a structured decision indicating whether the product is importable, why it may be restricted, and which technical aspect makes it sensitive."

        }
    ]

    return(

        <section className="flex flex-col justify-center items-center w-full bg-[#0B1220] px-10 py-20" id="how">
           
           <h1 className="text-[2em] font-bold text-gray-200 font-sans text-center">How Gemini-Trade Works</h1>
 
           <div className="flex flex-wrap justify-center items-center gap-15 mt-15">
              {
                data.map((d)=>{
                    return(
                        <div key={d.title} className="bg-gray-300 p-5 w-[280px] h-[300px] flex flex-col gap-3 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105">
                        <img src={d.icon} alt="" className="w-[60px] h-[60px]"/>
                        <p className="text-[1.3em] font-bold font-sans">{d.title}</p>
                        <p className="text-[15px] text-gray-800 font-[500] leading-5">{d.info}</p>
                        </div>
                    )
                })
              }
           </div>
        </section>
    )
}


export default memo(How);