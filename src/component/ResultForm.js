import React from "react";
import ChildResult from "./ChildResult";
let ResultForm = (props) => {
  const { questionData, answers, compare, fullName } = props;

  const calculateTotal = () => {
    var count = 0,
      i;

    for (i = 0; i < questionData.length; i++) {
      if (questionData[i].answer === answers[i]) {
        count++;
      }
    }
    return count;
  };

  const showAnswer = questionData.map((item, index) => {
    return (
      <ul key={index} className="child-question">
        <ChildResult
          question={item.question}
          rightanswer={item.answer}
          yourselected={answers[index]}
          compare={item.answer === answers[index]}
        />
      </ul>
    );
  });
  console.log(props);

  return (
    <div>
      <div>Name: {fullName}</div>
      <div>
        result:{calculateTotal()}/{questionData.length}
      </div>

      <div>{showAnswer}</div>
    </div>
  );
};
export default ResultForm;

// import React from "react";
// import ChildResult from "./ChildResult";

// let ResultForm = (props) => {
//   const { questionData, answer } = props;
//   const showAnswer = questionData.map((item, index) => {
//     return (
//       <li key={index} className="child-question">
//         <ChildResult
//           key={index}
//           question={item.question}
//           rightanswer={item.answer}
//           yourselected={answer[index]}
//         />
//       </li>
//     );
//   });
//   console.log(props);

//   return (
//     <div>
//       asd
//       {/* <ul>{showAnswer}</ul> */}
//     </div>
//   );
// };
// export default ResultForm;
