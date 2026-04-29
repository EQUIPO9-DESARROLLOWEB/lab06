import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

let HeaderData: string = 'Cortes Cortes Bryan Yael';

export default function Header() {
  return (
    <header className={styles.header} id="header">
      <nav className={styles.nav}>
        <Link href="#home" className={styles.nav_logo}>
          <span className={styles.logo_bracket}>&lt;</span>
          {HeaderData}
          <span className={styles.logo_bracket}>/&gt;</span>
        </Link>

        {/* Checkbox para menú móvil (opcional para el diseño actual) */}
        <input type="checkbox" id="nav-toggle" className={styles.nav_checkbox} />
        
        <label htmlFor="nav-toggle" className={styles.nav_toggle}>
          <i className="fas fa-bars"></i>
        </label>

        <ul className={styles.nav_list}>
          <li><Link href="#inicio" className={styles.nav_link}>Inicio</Link></li>
          <li><Link href="#intereses" className={styles.nav_link}>Intereses</Link></li>
          <li><Link href="#cv" className={styles.nav_link}>CV</Link></li>
          <li><Link href="#proyectos" className={styles.nav_link}>Proyectos</Link></li>
          <li><Link href="#contacto" className={styles.nav_link}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}