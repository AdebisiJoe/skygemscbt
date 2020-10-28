import {
  CRS_2009,
  CRS_2010,
  CRS_2011,
  CRS_2012,
  Literature_2008,
  Literature_2009,
  Literature_2010,
} from './QuestionHelper';

interface questionsObject {
  QuestNo: number;
  Questions: string;
  OptionA: string;
  OptionB: string;
  OptionC: string;
  OptionD: string;
  Answers: string;
  // Graphics: string;
}


export async function getQuestions(subject:string,year:number,noOfQuestions:number){ 

  const  Data = await import(`../../data/Literature_2010`); 
 return await Data;
  
}

