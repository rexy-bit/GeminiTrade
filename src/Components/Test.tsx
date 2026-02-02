import { memo, useState } from "react"
import { useAiContext } from "../Contexts/AiContext";

const Test = () => {

    const countries = [
  "Algeria",
  "France",
  "Italy",
  "United States",
  "United Kingdom",
  "China",
  "Turkey",

];

      const {loadingAi, getAiResponse, setUserInput, userInput, aiResponse} = useAiContext();

      const [msg, setMsg] = useState<string | null>(null);


      const submitForm = async(e: React.FormEvent<HTMLFormElement>) => {

           e.preventDefault();
          const form = e.currentTarget;

          const formData = new FormData(form);

          const name = formData.get("name") as string;

          const country = formData.get("country") as string;

          const fiche = formData.get("fiche") as string;

          const decret = formData.get("decret") as string;

          if(!name || name.trim() === ""){
             setMsg("Please enter a valid product name");
             return;
          }

          if(!country || country.trim() === "" ){
            setMsg("Please enter a valid country name");
            return;
          }

          if(!fiche || fiche.trim() === ""){
            setMsg("Please enter a valid Technical Sheet");
            return;
          }


          setMsg(null);

          const payload = {
  productName: name,
  country,
  ficheTech: fiche,
  decret
};

          setUserInput({
            productName : name,
            country : country,
            ficheTech : fiche,
            decret : decret
          });



          await getAiResponse(payload);

          
      }


    return(
        <section className="flex flex-col w-full justify-center items-center bg-[#0B1220]" id="test">

              <h1 className="text-[2em] font-bold text-gray-100 mt-15 text-center">Test Your Product Importability</h1>
                  <h2 className="text-[1.3em] text-gray-200 mt-5 font-[600] text-center">Analyze your product with Gemini AI in seconds</h2>

              <form className=" bg-[#111A2E] border-5 border-[#1E2A47] flex flex-col p-5 mt-10 rounded-[10px] mb-15" onSubmit={submitForm}>
                   <p className="text-center text-gray-100 text-[1.7em] font-bold">Form</p>

                  <div className="flex flex-col gap-2 w-full mt-7">
                    <p className="text-[15px] text-gray-100 font-[500]">Product name*</p>
                   <input 
                   type="text"
                   name="name" 
                   placeholder="Product name"
                   className="p-2 w-[700px] max-[800px]:w-[600px] max-[650px]:w-[400px] max-[500px]:w-[300px] bg-gray-100 rounded-[5px] text-[15px]  focus:border-[#4F7CFF]
                       focus:ring-1 focus:ring-[#4F7CFF]"
                   required
                   />
                   </div>

         
                  <div className="flex flex-col gap-2 w-full mt-7">
                    <p className="text-[15px] text-gray-100 font-[500]">Country*</p>
                   <select 
                   name="country" 
                   className="p-2 w-[700px] max-[800px]:w-[600px] max-[650px]:w-[400px] max-[500px]:w-[300px] bg-gray-100 rounded-[5px] text-[15px] focus:border-[#4F7CFF]
                 focus:ring-1 focus:ring-[#4F7CFF]"
                   id=""
                   required
                   >
                     <option value="" disabled>
                        Select a country
                    </option>

                    {countries.map((c)=>{
                        return(
                            <option key={c} value={c} >
                                {c}
                            </option>
                        )
                    })}
                   </select>
                   </div>
                   
                   <div  className="flex flex-col gap-2 w-full mt-7">
                    <p className="text-[15px] text-gray-100 font-[500]">Technical Sheet*</p>
                   <textarea 
                   name="fiche"
                   placeholder="Paste the product technical sheet here"
                      className="p-2 w-[700px] max-[800px]:w-[600px] max-[650px]:w-[400px] max-[500px]:w-[300px] bg-gray-100 rounded-[5px] text-[15px] focus:border-[#4F7CFF]
                 focus:ring-1 focus:ring-[#4F7CFF] h-[100px]"
                    id=""
                    >
                      
                   </textarea>
                   </div> 

                   <div className="flex flex-col gap-2 w-full mt-7">
                    <p className="text-[15px] text-gray-100 font-[500]">Official Import Decree (optional)</p>
                    <textarea name="decret"
                     className="p-2 w-[700px] max-[800px]:w-[600px] max-[650px]:w-[400px] max-[500px]:w-[300px] bg-gray-100 rounded-[5px] text-[15px] focus:border-[#4F7CFF]
                 focus:ring-1 focus:ring-[#4F7CFF] h-[100px]"
                    placeholder="Paste the official import decree of the selected country, if available"
                    id=""></textarea>
                   </div>

                    <button className=" text-[14px] bg-[#2563EB] h-[50px] mb-10 rounded-[5px] mt-10 text-gray-100 font-bold text-[16px] cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">
                        {loadingAi ? "Analyzing…" : "Check Importability"}
                    </button>

                 
              </form>

              {!loadingAi && aiResponse.status && (

                <div className="bg-[#0F172A] flex flex-col w-[900px] max-[1000px]:w-[700px] max-[800px]:w-[600px] max-[700px]:w-[400px] max-[500px]:w-[320px] p-5 border-[#1E2A47] border-5 rounded-[10px] mb-15" id="response">

                    <h1 className="text-[1.5em] text-gray-100 font-bold text-center underline">Gemini Response</h1>

                    <div className="text-[1em] text-gray-100 font-[500] mt-12">
                        <span>Verdict</span>:  {aiResponse.status.toUpperCase()}
                    </div>

                   <div>
                    <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Summmary</h3>
                    <p className="text-gray-300 mt-2 text-[15px]">{aiResponse.resume}</p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Reasons</h3>
                        <p className="text-gray-300 mt-2 text-[15px]">{aiResponse.reasons}</p>
                    </div>

                    {aiResponse.sensitivePart && (
                        <div className="mt-4">
                           <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Sensitive Part</h3>
                           <p className="text-gray-300 mt-2 text-[15px]">{aiResponse.sensitivePart}</p>
                        </div>
                    )}

                    {aiResponse.advices.length > 0 && (
                        <div className="mt-5">
                            <h3 className="text-[20px] text-gray-200 underline mt-5 font-[600]">Advices</h3>
                            <div className="pl-5 mt-3 ">
                                {aiResponse.advices.map((advice)=>{
                                    return(
                                        <li key={advice} className="text-gray-200 text-[15px]">{advice}</li>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    
                </div>
              )}

               
        </section>
    )
}

export default memo(Test);