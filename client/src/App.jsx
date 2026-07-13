import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Complaints from './pages/Complaints.jsx';

const AUTH_SHELL_ROUTES = ['/dashboard', '/complaints'];

function App() {
  const location = useLocation();
  const useAppShell = AUTH_SHELL_ROUTES.some((r) => location.pathname.startsWith(r));

  if (useAppShell) {
    return (
      <div className="min-h-screen flex bg-paper">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/complaints" element={<ProtectedRoute><Complaints /></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
