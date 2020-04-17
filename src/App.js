import React, { useState } from "react";
import LoginForm from "./component/form";
import quiz from "./data.json";
import QuestionForm from "./component/questionForm";
import ResultForm from "./component/ResultForm";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [fullName, setFullName] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  var obj = JSON.parse(JSON.stringify(quiz));

  //handling Form
  const handleValueForm = (fullName) => {
    console.log("form submit", fullName);
    setFullName(fullName);
    setCurrentPage("question");
  };

  //Handling Question
  const onNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
  };

  const onPrevQuestion = () => {
    setQuestionIndex(questionIndex - 1);
  };

  //Handling result
  const onResult = () => {
    setCurrentPage("result");
  };
  const onAnswer = (answer) => {
    console.log("the answer is:", answer);

    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };
  return (
    <div className="App">
      {/* <h1>{fullName}</h1> */}

      {/* Showing the login form page */}
      {currentPage === "login" && <LoginForm onSubmit={handleValueForm} />}
      {/* Showing the questions page */}
      {currentPage === "question" && (
        <QuestionForm
          questionNumber={questionIndex + 1}
          onNext={questionIndex < obj.length - 1 ? onNextQuestion : onResult}
          onPrev={questionIndex > 0 ? onPrevQuestion : null}
          onAnswer={onAnswer}
          userAnswer={answers[questionIndex]}
          questionData={obj[questionIndex]}
        />
      )}
      {/* Showing the result page */}
      {currentPage === "result" && (
        /*<h1>Hello</h1> */ <ResultForm
          questionData={obj}
          answers={answers}
          fullName={fullName}
        />
      )}
    </div>
  );
}
export default App;

// import React, { Component } from "react";
// import Landing from "./components/Landing";
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
//   Link,
// } from "react-router-dom";
// //import Layout from './container'
// import { render } from "@testing-library/react";
// import quiz from "./data.json";
// import Question from "./components/Question";
// import Result from "./components/Result";
// import LoginForm from "./component/form";
// import ResultForm from "./component/ResultForm1";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       fullName: "",
//       quiz: JSON.parse(JSON.stringify(quiz)),
//     };
//   }

//   onFullName = (name) => {
//     this.setState({
//       fullName: name,
//     });
//   };

//   onAnswered = (index, answer) => {
//     const quiz = this.state.quiz;
//     quiz[index].userAnswer = answer;

//     this.setState({
//       quiz: quiz,
//     });

//     console.log(this.state.quiz);
//     //console.log(`answer number ${index} is: ${answer}`);
//   };

//   render() {
//     //data[0].userAnswer === data[0].answer;

//     return (
//       <Router>
//         <div>
//           <h1> ReactJS Quiz App</h1>
//           <LoginForm/>

//           <Link to="/starting">button</Link>
//           <Switch>
//             <Route
//               exact
//               path="/starting"
//               render={(props) => (
//                 <Landing {...props} onFullName={this.onFullName} />
//               )}
//             />
//             <Route
//               exact
//               path="/question/:id"
//               render={(props) => (
//                 <Question
//                   {...props}
//                   data={this.state.quiz[props.match.params.id]}
//                   onAnswered={this.onAnswered}
//                 />
//               )}
//             />
//             <Route path="/result" component={Result} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
