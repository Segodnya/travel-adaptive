import { useState, useRef, useEffect } from 'react';
import './App.css';
import { BurgerMenu } from './BurgerMenu';
import { Logo } from './Logo';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      <BurgerMenu menuActive={menuActive} toggleMenu={toggleMenu} menuRef={menuRef} />
    </div>
  );
}

export default App;
