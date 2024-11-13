import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import logo from "../img/DevoluWeb.svg";

function Header() {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <header className="header-geral">
      <section className="wrapper-desktop d-flex justify-content-between align-items-center">
        <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
          <img src={logo} alt="logo da empresa" />
        </div>
        <div className="links-button">
          <ul className="d-flex justify-content-between align-items-center gap-3">
            {isAdmin && (
              <>
                <li>
                  <Link to="/products/create-product">
                    <button>Adicionar novo produto</button>
                  </Link>
                </li>
                <li>
                  <Link to="/users">
                    <button>Usuários</button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button>Logout</button>
                  </Link>
                </li>
              </>
            )}
            {!isAdmin && (
              <li>
                <Link to="/meus-dados">
                  <button>Meus Dados</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Header;
