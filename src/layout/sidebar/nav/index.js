//--------------------------------import the dependences
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

//--------------------------------import the styles
import { Container } from "./styles";

//--------------------------------import the components
import { IoIosHome } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { AiTwotoneSetting } from "react-icons/ai";

function Nav({ open, close }) {
   const [x, setX] = useState(false);

   useEffect(() => {
      setTimeout(() => setX(true), 5);
   }, []);

   const linksList = [
      { url: "/app", icon: IoIosHome, tittle: "Dashboard" },
      { url: "/app/history", icon: GoSearch, tittle: "Pesquisar" },
      { url: "/app/neworder", icon: AiTwotoneSetting, tittle: "Nova Ordem" },
   ];
   const currentUrl = window.location.pathname;

   const List = linksList.map((val, key) => (
      <Link to={{ pathname: val.url }} key={key}>
         <li>
            <CSSTransition in={val.url === currentUrl && x} timeout={500} classNames="divIconContainer" unmountOnExit>
               <div></div>
            </CSSTransition>
            <val.icon className={val.url === currentUrl ? "active" : ""} />
         </li>
         <p className={val.url === currentUrl ? "active" : ""}>{val.tittle}</p>
      </Link>
   ));

   return <Container>{List}</Container>;
}

export default Nav;
