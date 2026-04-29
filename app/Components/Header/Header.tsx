import React from 'react';
import styles from './Header.module.css';

let HeaderData: string = 'cortes cortes bryan yael'; 

export default function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <span className="logo__bracket">&lt;</span>
          {HeaderData}
          <span className="logo__bracket">/&gt;</span>
        </a>

        <input type="checkbox" id="nav-toggle" className="nav__checkbox" />
        
        <label htmlFor="nav-toggle" className="nav__toggle">
          <i className="fas fa-bars"></i>
        </label>

        {/* Agregamos el menú con la lista de navegación */}
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">Inicio</a>
            </li>
            <li className="nav__item">
              <a href="#interests" className="nav__link">Intereses</a>
            </li>
            <li className="nav__item">
              <a href="#cv" className="nav__link">CV</a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">Proyectos</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}