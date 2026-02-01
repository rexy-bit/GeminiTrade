import { createContext, useContext, useState } from "react";
import type { aiResponse, userInput } from "./Types";


const GEMINI_API_KEY = import.meta.env.GEMINI_API_KEY;

interface AiContextType{
    userInput : userInput;
    aiResponse : aiResponse;
    setUserInput : (u : userInput)=>void;
    getAiResponse : (userIn : userInput)=>Promise<void>
    loadingAi : boolean;
}


const AiContext = createContext<AiContextType | null>(null);

export const AiProvider = ({children} : {children: React.ReactNode}) => {

    const [userInput, setUserInput] = useState<userInput>({productName : "", country : "", ficheTech : "", decret : ""});

    const [aiResponse, setAiResponse] = useState<aiResponse>({resume : '', status : "", reasons : "", sensitivePart : "", advices : []});

    const [loadingAi, setLoadingAi] = useState<boolean>(false);

    const getAiResponse = async (userIn: userInput) => {
        setLoadingAi(true);

        try {
            // Crée ton prompt pour Gemini
            const prompt = `
You are "GeminiImport AI", an expert in import regulations.

Task:
- Analyze the product and its technical sheet
- Determine if it can be imported to the given country
- Explain reasons
- Identify sensitive parts of the product if any
- Give practical advice

Input:
Product Name: ${userIn.productName}
Country: ${userIn.country}
Technical Sheet: ${userIn.ficheTech}
${userIn.decret ? `Optional Decree: ${userIn.decret}` : ""}

Output format (JSON):
{
  "resume": "short summary",
  "status": "importable | not importable",
  "reasons": "explain why",
  "sensiblePart": "if any, specify",
  "advices": ["advice 1", "advice 2"]
}
`;

            const response = await fetch("https://api.generativeai.google.com/v1beta2/models/gemini-3:generateText", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${GEMINI_API_KEY}`
                },
                body: JSON.stringify({
                    prompt,
                    temperature: 0.7,
                    maxOutputTokens: 500
                })
            });

            const data = await response.json();

            // Gemini renvoie souvent un objet avec un champ "candidates"
            const rawText = data?.candidates?.[0]?.content || "";

            // On nettoie un peu si le texte contient ```json
            const jsonText = rawText
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            const parsed: aiResponse = JSON.parse(jsonText);

            setAiResponse(parsed);
        } catch (error: any) {
            console.error("AI error:", error);
            setAiResponse({
                resume: "Error generating response",
                status: "unknown",
                reasons: error.message || "Unknown error",
                sensitivePart: "",
                advices: []
            });
        } finally {
            setLoadingAi(false);
        }
    };

    return(
        <AiContext.Provider value={{userInput, aiResponse, loadingAi, getAiResponse, setUserInput}}>
            {children}</AiContext.Provider>
    )

}


export const useAiContext = () => {

    const context = useContext(AiContext);

    if(!context){
        throw new Error("Error please use the useAuthContext inside an AuthProvider");
    }

    return context;
}