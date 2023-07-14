import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
import { Link } from "react-router-dom";
interface TweetProps {
  content: String;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/tweet" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/122624168?v=4"
        alt="foto perfil"
        className=""
      />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Henrique</strong>
          <span>@Henrique</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
          </button>

          <button type="button">
            <ArrowsClockwise />
          </button>

          <button type="button">
            <Heart />
            24
          </button>
        </div>
      </div>
    </Link>
  );
}
