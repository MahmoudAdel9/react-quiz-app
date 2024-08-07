import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  status: "loading",
  points: 0,
  highPoints: 0,
  remainingSeconds: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, questions: [], status: "error" };
    case "start":
      const SECONDS = 30;
      return {
        ...state,
        status: "active",
        remainingSeconds: state.questions.length * SECONDS,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highPoints:
          state.points > state.highPoints ? state.points : state.highPoints,
      };
    case "restart":
      return { ...state, index: 0, answer: null, points: 0, status: "ready" };
    case "timer":
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1,
        status: state.remainingSeconds === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("error");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highPoints, remainingSeconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(
    
    
    function () {
    fetch("https://mahmoudadel9.github.io/react-quiz-data/db.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data.questions }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);


  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highPoints,
        remainingSeconds,
        numQuestions,
        maxPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("Calling useQuiz Outside QuizProvider");
  return context;
}

export { useQuiz, QuizProvider };
