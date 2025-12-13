import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Health } from './pages/Health';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div>
            <strong>TalkingOli</strong>
            <span className="tag">baseline</span>
          </div>
          <nav>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/health">Health</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
