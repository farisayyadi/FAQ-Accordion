import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import "./question.scss";

export const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="questions">
      <div className="questionBox">
        <h4>{question}</h4>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </button>
      </div>
      <div className="answerBox">{showAnswer && <p>{answer}</p>}</div>
    </div>
  );
};
