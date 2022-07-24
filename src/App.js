import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import SharedLayout from './components/routing/SharedLayout';
import Homepage from './pages/home/Homepage';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="homepage" element={<Homepage />} />
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
