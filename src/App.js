import { Link } from 'react-router-dom';
import icon from './images/app-icon.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to="#" className="header__link">
          <img src={icon} alt="app-icon" className="header__logo" />
        </Link>
        <button className="header__button" />
      </header>
      <main className="main">
        <h1 className="main__title">Путешествовать — круто!</h1>
        <button className="main__button">Поехали с нами</button>
      </main>
    </div>
  );
}

export default App;
