import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import Chats from "../Chats/Chats";
import Layout from "../Layout/Layout";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";

import './App.css';


function App() {
    const [chats, setChats] = useState({
        1 : {
            name: 'First chat',
            messages: [
                {
                    text: 'Test for chat 1',
                    author: 'robot'
                },
                {
                    text: 'One mor test for chat 1',
                    author: 'robot'
                },
            ]
        },
        2 : {
            name: 'Second chat',
            messages: [
                {
                    text: 'The one and only test for chat 2',
                    author: 'robot'
                },
            ]
        },
    });

    return (
        <Routes>
            <Route path = {'/'} element = {<Layout />}>
                <Route index path = {'/'} element = {<Home/>}/>
                <Route path = {'/chats/:chatId'}
                       element = {<Chats
                           chats= {chats}
                           setChats= {setChats}/>}
                />
                <Route path = {'/chats'} element = {<Chats chats = {chats} setChats = {setChats} />} />
                <Route path = {'/profile'} element = {<Profile/>}/>
                <Route path = {'*'} element = {<NotFound/>}/>
            </Route>

        </Routes>
    )

}

export default App;
