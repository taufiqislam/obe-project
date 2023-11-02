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
import MissionPeoContext from "./components/Context/MissionPeoContext";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import PloPeoContext from "./components/Context/PloPeoContext";

import {AddCoursePage} from './pages/AddCoursePage'
import CurriculumPage from './pages/CurriculumPage';

import CloPloRePage from "./pages/CloPloRePage";
import { CloPage } from './pages/CloPage';
import { BookReferencePage } from './pages/BookReferencePage';
import { CourseObjectivePage } from './pages/CourseObjectivePage';


function App() {

    // PEOS FUNCTIONAL WORK HERE //
    const [peos, setPeos] = useState([])
    const addPeo = peo =>  {
        setPeos([...peos, {id: uuidv4(), description: peo, completed: false, isEditing: false}])
        console.log(peos)
    }
    const deletePeo = id => {
        setPeos(peos.filter(peo => peo.id !== id))
    }
    const editPeo = id => {
        setPeos(peos.map(peo => peo.id === id ? {...peo, isEditing: !peo.isEditing} : peo))
    }
    const editDescription = (description, id) => {
        setPeos(peos.map(peo => peo.id === id ? {...peo,description, isEditing: !peo.isEditing} : peo))
    }

    // MISSIONS WORK HERE//
    const [missions, setMissions] = useState([])
    const addMission = mission =>  {
        setMissions([...missions, {id: uuidv4(), description: mission, completed: false, isEditing: false}])
        console.log(missions)
    }
    const deleteMission = id => {
        setMissions(missions.filter(mission => mission.id !== id))
    }
    const editMission = id => {
        setMissions(missions.map(mission => mission.id === id ? {...mission, isEditing: !mission.isEditing} : mission))
    }
    const editDescriptionMission = (description, id) => {
        setMissions(missions.map(mission => mission.id === id ? {...mission,description, isEditing: !mission.isEditing} : mission))
    }


    // PLOS WORK HERE //
    const [plos, setPlos] = useState([])
    const addPlo = plo =>  {
        setPlos([...plos, {id: uuidv4(), description: plo, completed: false, isEditing: false}])
        console.log(plos)
    }
    const deletePlo = id => {
        setPlos(plos.filter(plo => plo.id !== id))

    }

    const editPlo = id => {
        setPlos(plos.map(plo => plo.id === id ? {...plo, isEditing: !plo.isEditing} : plo))
    }

    const editDescriptionPlo = (description, id) => {
        setPlos(plos.map(plo => plo.id === id ? {...plo,description, isEditing: !plo.isEditing} : plo))
    }


  return (
    
    <BrowserRouter>
      <MissionPeoContext.Provider value={{peos,addPeo,deletePeo,editPeo,editDescription,missions,addMission,deleteMission,editMission,editDescriptionMission}}>
         <PloPeoContext.Provider value={{plos,deletePlo,editPlo,editDescriptionPlo,addPlo}}>
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

                 <Route path='/addcourse'  element={<AddCoursePage/>}/>
                 <Route path='/curri'  element={<CurriculumPage/>}/>

                 <Route path='/cloPloReasoning' element={<CloPloRePage/>}/>
                 <Route path='/clo' element={<CloPage/>}/>
                 <Route path='/bookreference' element={<BookReferencePage/>}/>
                 <Route path='/courseobjective' element={<CourseObjectivePage/>}/>

             </Routes>
         </PloPeoContext.Provider>
      </MissionPeoContext.Provider>
    </BrowserRouter>
  );
}

export default App;