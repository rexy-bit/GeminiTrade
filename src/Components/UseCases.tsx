import { memo } from "react"

const UseCases = () => {

    const cases = [
        {
            icon : "fa-solid fa-industry",
            case : "Industrial Importers",
            problem : "Complex technical products with unclear import regulations.",
            solution : "AI analyzes product specs and checks country-specific laws.",
            impact : "Faster decisions, reduced compliance risk"
        },
        {
            icon : "fa-solid fa-cart-flatbed",
            case : "Logistics & Freight Companies",
            problem : "Shipment delays due to missing or incorrect legal checks.",
            solution : "Pre-validation of goods before shipment using AI.",
            impact : "Fewer delays, smoother customs clearance"
        },
        {
            icon : "fa-solid fa-dumpster",
            case : "Cross-Border E-Commerce",
            problem : "Products rejected at customs after being sold.",
            solution : "Automatic compliance check before listing products.",
            impact : "Fewer returns, better customer trust"
        }
        ,
        {
            icon : "fa-solid fa-people-group",
            case : "Customs & Compliance Teams",
            problem : "Manual legal analysis under time pressure.",
            solution : "AI-assisted decision support with explainable results.",
            impact : "Higher accuracy, time saved"
        }
    ]

    return(
        <section className="flex flex-col justify-center items-center bg-[#0B1220]" id="cases">
            <h1 className="text-[2em] text-center font-bold text-gray-100 mt-20">Use Cases (Business Impact)</h1>
             <h2 className="text-[1.2em] text-gray-200 text-center mt-5 font-[600]">Real-world use cases for AI-powered import compliance</h2>
             <h3 className="text-[1.1em] text-gray-300 mt-5 text-center font-[600]">Gemini-Trade helps businesses and institutions make faster, safer import decisions using AI.</h3>

             <div className="mt-15 flex flex-wrap gap-10 justify-center items-center  mb-20">
                {cases.map((c)=>{
                    return(
                        <div className="bg-[#0F172A] border border-white/5 border-5 p-5 w-[300px] rounded-[10px] border-white/5 flex flex-col gap-4 h-[430px] transition-transform duration-300 hover:scale-105 cursor-pointer" key={c.case}>
                            <i className={`${c.icon} text-[2em] text-gray-300`}></i>
                            <h3 className="text-[1.2em] font-bold leading-6 text-gray-200">{c.case}</h3>

                            <div>
                                <p className="text-gray-200 text-[17px] font-bold underline">Problem</p>
                                <div className="text-[15px] text-gray-100 font-[600] mt-1">{c.problem}</div>

                            </div>

                            <div>
                                <p className="text-gray-200 text-[17px] font-bold underline">Solution</p>
                                <div className="text-[15px] text-gray-100 font-[600] mt-1">{c.solution}</div>
                            </div>

                            <div>
                                <p className="text-gray-200 text-[17px] font-bold underline">Impact</p>
                                <div className="text-[15px] text-gray-100 font-[600] mt-1">{c.impact}</div>
                            </div>
                        </div>
                    )
                })}
             </div>


        </section>
    );
}

export default memo(UseCases);

