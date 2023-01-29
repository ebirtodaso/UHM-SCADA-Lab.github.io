import React from 'react';
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
import Network from './departments/Network/Network';
import SystemAdmin from './departments/SystemAdmin';
import KnowledgeManagement from './departments/KnowledgeManagement';
import SNMPNOC from './departments/SNMPNOC';
import SFlowSDN from './departments/SFlowSDN';
import MLCurriculum from './departments/MLCurriculum';
import HCI from './departments/HCI';
import Database from './departments/Database';
import LogStash from './departments/LogStash';
import RedTeamSEL from './departments/RedTeamSEL';
import Legacy from './legacy/Legacy';
import LinuxSystem from './legacy/LinuxSystem/LinuxSystem';
import PiAPI from './legacy/LinuxSystem/PiAPI';
import LaunchingCommands from './legacy/LinuxSystem/LaunchingCommands';
import RF from './legacy/RF';
import PanicButton from './legacy/PanicButton';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/equipmentList" element={<EquipmentList />} />
        <Route path="/configuration" element={<Configuration />} />

        {/* Department Pages */}
        <Route path="/departments" element={<Departments />} />
        <Route path="/network" element={<Network />} />
        <Route path="/systemAdmin" element={<SystemAdmin />} />
        <Route path="/knowledgeManagement" element={<KnowledgeManagement />} />
        <Route path="/snmp-noc" element={<SNMPNOC />} />
        <Route path="/sFlow-SDN" element={<SFlowSDN />} />
        <Route path="/mlCurriculum" element={<MLCurriculum />} />
        <Route path="/hci" element={<HCI />} />
        <Route path="/database" element={<Database />} />
        <Route path="/redTeam-SEL" element={<RedTeamSEL />} />
        <Route path="/logStash" element={<LogStash />} />

        {/* Legacy Pages */}
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/linux" element={<LinuxSystem />} />
        <Route path="/piAPI" element={<PiAPI />} />
        <Route path="/launchingCommands" element={<LaunchingCommands />} />
        <Route path="/rf" element={<RF />} />
        <Route path="/panicButton" element={<PanicButton />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
