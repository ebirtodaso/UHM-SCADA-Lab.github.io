import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Team from './pages/Team';
import ToDoList from './pages/ToDoList';
import EquipmentList from './pages/EquipmentList';
import Configuration from './pages/Configuration';
import Departments from './departments/Departments';
import Legacy from './legacy/Legacy';
import PanicButton from './legacy/PanicButton';
import RF from './legacy/RF';
import LinuxSystem from './legacy/LinuxSystem/LinuxSystem';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/equipmentList" element={<EquipmentList />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="*" element={<NotFound />} />

        {/* Department Pages */}
        <Route path="/departments" element={<Departments />} />

        {/* Legacy Pages */}
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/linux" element={<LinuxSystem />} />
        <Route path="/rf" element={<RF />} />
        <Route path="/panicButton" element={<PanicButton />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;