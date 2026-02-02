import { createContext, useContext, useEffect, useState } from "react";
import type { AiResponse, userInput } from "./Types";

// Vite requires VITE_ prefix for env variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

interface AiContextType {
  userInput: userInput;
  aiResponse: AiResponse;
  setUserInput: (u: userInput) => void;
  getAiResponse: (userIn: userInput) => Promise<void>;
  loadingAi: boolean;
}

const AiContext = createContext<AiContextType | null>(null);

export const AiProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInput, setUserInput] = useState<userInput>({
    productName: "",
    country: "",
    ficheTech: "",
    decret: "",
  });
  const [aiResponse, setAiResponse] = useState<AiResponse>(()=>{
    
    const saved = localStorage.getItem("aiResponse");

    return saved ? JSON.parse(saved) : 
    {
    resume: "",
    status: "",
    reasons: "",
    sensitivePart: "",
    advices: [],
  }});

  useEffect(()=>{
    localStorage.setItem("aiResponse", JSON.stringify(aiResponse));
  }, [aiResponse]);
  const [loadingAi, setLoadingAi] = useState(false);

const getAiResponse = async (userIn: userInput): Promise<void> => {
  setLoadingAi(true);
  try {
    const prompt = `You are "GeminiImport AI", an expert in import regulations.

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

CRITICAL: You must respond with COMPLETE, valid JSON. Do not cut off mid-response.

Output format (must be complete valid JSON):
{
  "resume": "short summary",
  "status": "importable or not importable",
  "reasons": "explain why",
  "sensitivePart": "if any, specify, otherwise empty string",
  "advices": ["advice 1", "advice 2", "advice 3"]
}`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        method: "POST",
        headers: {
          "x-goog-api-key": GEMINI_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048, // Increased from 1000 to 2048
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error Details:", errorData);
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Full API Response:", data);
    
    // Check if response was incomplete
    const finishReason = data?.candidates?.[0]?.finishReason;
    if (finishReason === "MAX_TOKENS") {
      console.warn("⚠️ Response was truncated due to token limit");
    }
    
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    if (!rawText) {
      throw new Error("No response content from AI");
    }

    console.log("Raw AI Text:", rawText);

    // Clean up JSON from markdown code blocks
    let jsonText = rawText
      .replace(/```json\s*/g, "")
      .replace(/```\s*/g, "")
      .trim();

    // Extract JSON if wrapped in other text
    const firstBrace = jsonText.indexOf('{');
    const lastBrace = jsonText.lastIndexOf('}');
    
    if (firstBrace !== -1 && lastBrace !== -1) {
      jsonText = jsonText.substring(firstBrace, lastBrace + 1);
    } else {
      throw new Error("No valid JSON object found in response");
    }

    let parsed: AiResponse;
    try {
      parsed = JSON.parse(jsonText);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      console.error("Raw text:", rawText);
      console.error("Extracted JSON:", jsonText);
      
      // If still incomplete, throw helpful error
      throw new Error("AI response was incomplete or invalid JSON. Try with shorter input or increase token limit.");
    }

    console.log("AI response: ", parsed);
    setAiResponse(parsed);
  } catch (error: any) {
    console.error("AI error:", error);
    setAiResponse({
      resume: "Error generating response",
      status: "unknown",
      reasons: error.message || "Unknown error occurred",
      sensitivePart: "",
      advices: [
        "Please check your internet connection",
        "Verify your API key is valid",
        "Try with shorter input text"
      ],
    });
  } finally {
    setLoadingAi(false);
  }
};

  return (
    <AiContext.Provider
      value={{
        userInput,
        aiResponse,
        setUserInput,
        getAiResponse,
        loadingAi,
      }}
    >
      {children}
    </AiContext.Provider>
  );
};

export const useAiContext = () => {
  const context = useContext(AiContext);
  if (!context) {
    throw new Error("useAiContext must be used within an AiProvider");
  }
  return context;
};