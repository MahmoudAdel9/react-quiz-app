import { useEffect } from "react";

function Timer({ dispatch, remainingSeconds }) {
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "timer" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  const mins = Math.floor(remainingSeconds / 60);
  const sec = remainingSeconds % 60;
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{sec}
      {sec < 10 && "0"}
    </div>
  );
}

export default Timer;
