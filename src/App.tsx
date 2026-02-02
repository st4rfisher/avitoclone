import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Avito Clone</h1>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <h2>Добро пожаловать!</h2>
      <p>Проект успешно настроен и готов к разработке.</p>
    </div>
  );
}

export default App;
