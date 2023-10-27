import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { VisionPage } from './pages/VisionPage';
import { PeoPage } from './pages/PeoPage';
import { PloPage } from './pages/PloPage';
import { IloPage } from './pages/IloPage';
import { CourseInfoPage } from './pages/CourseInfoPage';
import { MissionPage } from './pages/MissionPage';
import { PeoMapMissionPage } from './pages/PeoMapMissionPage';
import { PloMapPeoPage } from './pages/PloMapPeoPage';
import { CloMapPloPage } from './pages/CloMapPloPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "mission",
    element: <MissionPage/>,
  },
  {
    path: "vision",
    element: <VisionPage/>,
  },
  {
    path: "peo",
    element: <PeoPage/>,
  },
  {
    path: "plo",
    element: <PloPage/>,
  },
  {
    path: "ilo",
    element: <IloPage/>,
  },
  {
    path: "courseinfo",
    element: <CourseInfoPage/>,
  },
  {
    path: "peomapmission",
    element: <PeoMapMissionPage/>,
  },
  {
    path: "plomappeo",
    element: <PloMapPeoPage/>,
  },
  {
    path: "clomapplo",
    element: <CloMapPloPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
