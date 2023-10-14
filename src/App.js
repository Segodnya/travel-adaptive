import './App.css';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Logo device="mobile" />
        <div className="header__links-container">
          <button className="header__button" />
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
    </div>
  );
}

export default App;
