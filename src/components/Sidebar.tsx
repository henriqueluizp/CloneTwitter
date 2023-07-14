import {
  Bell,
  BookmarkSimple,
  CheckCircle,
  DotsThreeCircle,
  EnvelopeSimple,
  FileText,
  House,
  MagnifyingGlass,
  Pencil,
  User,
} from "phosphor-react";
import twitterLogo from "../assets/logo-twitter.svg";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src={twitterLogo}
        alt="logo_twitter"
        className="logo
    "
      />

      <nav className="main-navegation">
        <NavLink to="/">
          <House weight="fill"></House> <span>Página inicial</span>
        </NavLink>
        <a href="">
          <MagnifyingGlass />
          <span>Explorar</span>
        </a>
        <a href="">
          <Bell></Bell>
          <span>Notificação</span>
        </a>
        <a href="">
          <EnvelopeSimple />
          <span>Mensagens</span>
        </a>
        <a href="">
          <FileText />
          <span>Listagem</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Itens salvos</span>
        </a>
        <a href="">
          <CheckCircle />
          <span>Verificados</span>
        </a>
        <a href="">
          <User />
          <span>Perfil</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>Mais</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
