
export interface userInput{
    productName : string;
    country : string;
    ficheTech : string;
    decret? : string;
}

export interface aiResponse{
   resume : string;
   status : string;
   reasons: string;
   sensitivePart : string;
   advices : string[];
}