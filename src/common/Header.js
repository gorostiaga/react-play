import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  return (
    <header className="app-header">
        <span><Link to="/">React Play</Link></span>
        <ul className="header-links">
          <li>
            <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/tapasadhikary" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        </ul>
    </header>
  );
};

export default Header;