import logo from './logo.svg';
import './App.css';
import { MissionPage } from './pages/MissionPage';
import { VisionPage } from './pages/VisionPage';
import { PeoPage } from './pages/PeoPage';
import { PloPage } from './pages/PloPage';
import { IloPage } from './pages/IloPage';
import { CourseInfoPage } from './pages/CourseInfoPage';
import { PeoMapMissionPage } from './pages/PeoMapMissionPage';
import { PloMapPeoPage } from './pages/PloMapPeoPage';
import { CloMapPloPage } from './pages/CloMapPloPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/mission' element={<MissionPage/>}/>
        <Route path='/vision' element={<VisionPage/>}/>
        <Route path='/peo' element={<PeoPage/>}/>
        <Route path='/plo' element={<PloPage/>}/>
        <Route path='/ilo' element={<IloPage/>}/>
        <Route path='/courseinfo' element={<CourseInfoPage/>}/>
        <Route path='/peomapmission' element={<PeoMapMissionPage/>}/>
        <Route path='/plomappeo' element={<PloMapPeoPage/>}/>
        <Route path='/clomapplo' element={<CloMapPloPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
