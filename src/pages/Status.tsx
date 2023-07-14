import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separetor } from "../components/Separetor";
import { Tweet } from "../components/Tweet";
import "./Status.css";
import { PaperPlaneTilt } from "phosphor-react";

export function Status() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState(["Responda aqui!"]);

  function createNewAnswers(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswers, ...answers]);
    setNewAnswers("");
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="O que você achou?" />
      <Separetor />
      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/122624168?v=4"
            alt="img-perfil"
          ></img>
          <textarea
            id="tweet"
            placeholder="Tweetar sua resposta!"
            value={newAnswers}
            onChange={(event) => {
              setNewAnswers(event.target.value);
            }}
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneTilt />
          <span>Responder</span>{" "}
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
