import React, { Fragment } from "react";

function ResultForm(props) {
  const { question, rightanswer, yourselected, compare } = props;

  return (
    <Fragment className="display-check">
      <h4 className="mt-5 pt-2">{question} </h4>

      <div className="row pt-4 justify-content-center">
        <div className="col-4">
          <table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th scope="col">Your Anwser</th>
                <th scope="col">Correct Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{yourselected}</td>
                <td>{rightanswer}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4">
          {compare ? (
            <button className="btn btn-success">Correct</button>
          ) : (
            <button className="btn btn-danger">Incorrect</button>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default ResultForm;
