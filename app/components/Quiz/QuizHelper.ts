import {
  CRS_2009,
  CRS_2010,
  CRS_2011,
  CRS_2012,
  Literature_2008,
  Literature_2009,
  Literature_2010,
  Physics_2016,
  Physics_2017,
  Physics_2018,
  Physics_2019,
  Geography_2018,
  Geography_2019,
  Chemistry_2018,
  Chemistry_2019,
  Biology_2017,
  Biology_2018,
  Biology_2019


} from './QuestionHelper';


export { Geography_2018 } from '../../data/Geography_2018';
export { Geography_2019 } from '../../data/Geography_2019';
export { Chemistry_2018 } from '../../data/Chemistry_2018';
export { Chemistry_2019 } from '../../data/Chemistry_2019';
export { Biology_2017 } from '../../data/Biology_2017';
export { Biology_2018 } from '../../data/Biology_2018';
export { Biology_2019 } from '../../data/Biology_2019';

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


// export async function getQuestions(subject:string,year:number,noOfQuestions:number){ 

//   const  Data = await import(`../../data/Literature_2010`); 
//  return await Data;
  
// }


export  function getQuestions(subject:string,year:number,noOfQuestions:number){ 

    if(subject=="Literature"&&year==2008)
    {
      return Literature_2008;
    }else if(subject=="Literature"&&year==2009)
    {
      return Literature_2009;
    }else if(subject=="Literature"&&year==2010)
    {
      return Literature_2010;
    }else if(subject=="CRS"&&year==2009)
    {
      return CRS_2009;
    }else if(subject=="CRS"&&year==2010)
    {
      return CRS_2010;
    }else if(subject=="CRS"&&year==2011)
    {
      return CRS_2011;
    }else if(subject=="CRS"&&year==2012)
    {
      return CRS_2012;
    }
  
}

