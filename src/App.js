import { useState } from 'react';
import './App.css';
import { BurgerMenu } from './components/BurgerMenu';
import { Logo } from './components/Logo';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="app">
      <header className="header">
        <Logo device="mobile" />
        <div className="header__links-container">
          <button className="button-menu header__button" onClick={toggleMenu} />
          <ul className="header__links">
            <li>Календарь</li>
            <li>Отзывы</li>
            <li>
              <Logo device="desktop" />
            </li>
            <li>Магазин</li>
            <li>Контакты</li>
          </ul>
        </div>
      </header>
      <main className="main">
        <h1 className="main__title">Путешествовать —&nbsp;круто!</h1>
        <button className="main__button">Поехали с нами</button>
      </main>
      <BurgerMenu menuActive={menuActive} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
