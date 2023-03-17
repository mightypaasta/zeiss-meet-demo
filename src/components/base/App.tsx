import React from 'react';
import './App.css';
import MainView from '../common/mainview/MainView';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Link,
  RouterProvider,
} from "react-router-dom";
import Login from '../../ui/login/Login';
import Register from '../../ui/register/Register';
import UpcomingMeetings from '../../ui/dashboard/upocomingevent/UpcomingMeetings';
import Container from './container/Container';

const router= createBrowserRouter([
  {
    path:"/",
    element: <MainView props={<Login/>}/>
  },
  {
    path:"/register",
    element: <MainView props={<Register/>} />
  },
  {
    path:'/login/id',
    element: <MainView props={<Container
    />} />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
