import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Container from "../../base/container/Container";
import './mainview.css'
import Login from "../../../ui/login/Login";
import Register from "../../../ui/register/Register";
import { JsxElement } from "typescript";

interface IProps{
    props:React.ReactElement
}

const MainView:React.FC<IProps> = ({props}) => {
    return (
        <div className="container">
            <div id="header_component">
                <Header />
            </div>
            <div id="sidebar_component">
                <Sidebar />
            </div>
            <div id="container_component">
                {props}
            </div>
        </div>
    )
}

export default MainView;