import React from "react";
import "./App.css";
import MainView from "../common/mainview/MainView";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Link,
  RouterProvider,
} from "react-router-dom";
import Login from "../../ui/login/Login";
import Register from "../../ui/register/Register";
import UpcomingMeetings from "../../ui/dashboard/upocomingevent/UpcomingMeetings";
import Container from "./container/Container";
import MeetList from "../../ui/Meet list/MeetList";
import CreateMeetingPopUp from "../../ui/CreateMeetingPopUp/CreateMeetingPopUp";
import OnGoingEvents from "../../ui/dashboard/ongoingevent/ongoingevent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView props={<OnGoingEvents />} />,
  },
  {
    path: "/login",
    element: <MainView props={<Login />} />,
  },
  {
    path: "/register",
    element: <MainView props={<Register />} />,
  },
  {
    path: "/login/id",
    element: <MainView props={<Container />} />,
  },
  {
    path: "/upcoming_meetings",
    element: <MainView props={<UpcomingMeetings />} />,
  },
  {
    path: "/meet_list",
    element: <MainView props={<MeetList isZero={false} />} />,
  },
  {
    path: "/create_meeting_popup",
    element: <MainView props={<CreateMeetingPopUp />} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
