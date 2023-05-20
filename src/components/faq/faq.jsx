import { Question } from "../questin/question";
import { MdQuestionAnswer } from "react-icons/md";
import "./faq.scss";
import { questions } from "../data/data";

export const Faq = () => {
  return (
    <div className="faq">
      <div className="title">
        <MdQuestionAnswer size={30} color=" rgb(255, 145, 0)" />
        <h1>FAQ</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      {questions.map((question) => (
        <Question
          key={question.is}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
};
