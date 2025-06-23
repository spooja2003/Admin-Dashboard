import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardLayout from './components/DashboardLayout';

import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import TablePage from './pages/TablePage';

const App = () => (
  <Router>
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </DashboardLayout>
  </Router>
);

export default App;
