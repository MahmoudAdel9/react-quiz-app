import { useQuiz } from "../context/QuizContext";

function FinishScreen() {
  const { points, maxPoints, highPoints, dispatch } = useQuiz();
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        Your Score Is {points} Out Of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">High Score Is :{highPoints}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
