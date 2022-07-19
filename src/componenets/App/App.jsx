import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import Chats from "../Chats/Chats";
import Layout from "../Layout/Layout";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Posts from "../Posts/Posts";

import './App.css';


function App() {

    return (
        <Routes>
            <Route path = {'/'} element = {<Layout />}>
                <Route index path = {'/'} element = {<Home/>}/>
                <Route path = {'/chats/:chatId'}
                       element = {<Chats/>}
                />
                <Route path = {'/chats'} element = {<Chats />} />
                <Route path = {'/profile'} element = {<Profile/>}/>
                <Route path = {'/posts'} element = {<Posts/>}/>
                <Route path = {'*'} element = {<NotFound/>}/>
            </Route>

        </Routes>
    )

}

export default App;
