import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import logo from '../assets/images/logo.svg';
import logoText from '../assets/images/text-analyzer.svg';

interface INavigation {
  direction: 'row' | 'column';
}

interface INavigationButton {
  to: string;
  text: string;
  icon?: string;
}

function NavEntry(props: INavigationButton) {
  const { text, icon, to } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles['nav-link']} ${isActive && styles['active-nav-link']}`
      }
    >
      <span>
        <i className={icon}></i> {text}
      </span>
    </NavLink>
  );
}

export default function Navigation(props: INavigation) {
  const { direction } = props;

  return (
    <Navbar className={`${styles['nav']} ${styles[direction]}`}>
      <img src={direction === 'column' ? logoText : logo} alt="Logo" />
      {direction === 'column' && (
        <div className="horizontal-separator-light" />
      )}
      <NavEntry to="/" icon="bi bi-bar-chart" text="DASHBOARD" />
      <NavEntry to="/imports" icon="bi bi-upload" text="IMPORTS" />
    </Navbar>
  );
}
