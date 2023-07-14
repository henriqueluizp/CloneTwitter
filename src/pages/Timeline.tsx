import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separetor } from "../components/Separetor";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

export function TimeLine() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState(["Clique para abrir "]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/6311119?v=4"
            alt="img-perfil"
          ></img>
          <textarea
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
            id="tweet"
            value={newTweet}
            placeholder="O que está acontecendo?"
          ></textarea>
        </label>
        <button type="submit">Tweetar</button>
      </form>

      <Separetor />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
