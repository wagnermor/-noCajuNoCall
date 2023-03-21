import styles from './Header.module.css';
import cajuLogo from '../assets/caju-logo.png';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={ cajuLogo } alt="" className = { styles.logo } />
      <h1> #noCajuNoCall </h1>
    </header>
  )
}