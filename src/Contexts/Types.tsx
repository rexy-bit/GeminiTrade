
export interface userInput{
    productName : string;
    country : string;
    ficheTech : string;
    decret? : string;
}

export interface AiResponse{
   resume : string;
   status : string;
   reasons: string;
   sensitivePart : string;
   advices : string[];
}

export interface Example{
       name : string;
    country : string;
    fiche : string;
    decret? : string;
    aiResponse : AiResponse;
}