import './App.css';
import Message from "./Message";
import {useEffect, useState} from "react";

function App() {
    const title = 'Homework 2';
    const [messageList , setMessageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(1);

    const handleNewMessage = (event) => {
        event.preventDefault();
        setMessageList(prevState => [...prevState, {
            id:id,
            text,
            author
        }]);
        setId((prevId)=> prevId+1); // увеличиваем id для следующего сообщения
    }

    useEffect(() => {
        setTimeout(()=>{
            if (author) console.log('Message from author ', author, ' has been send');
        }, 5000);
        // обнуляем поля формы для нового сообщения
        setAuthor('');
        setText('');
    },[messageList]);

    // как я поняла, когда обновляется messageList
    // в стейте author как раз и лежит последнее значение
    // или useEffect проходит с задержкой и нужно получать автора из массива messageList ???
    // у меня все работает, но все же я не уверена, что это корректно

    return (
        <div className="App">
            <Message text={title}/>
            <form onSubmit={handleNewMessage}>
                <label htmlFor = "text">Text</label>&nbsp;
                <input required type="text" id = "text" value={text} onChange={(event) => setText(event.target.value)}/>
                &nbsp;
                <label htmlFor="author">Author</label>&nbsp;
                <input required type="author" id="author" value={author} onChange={(event) => setAuthor(event.target.value)}/>
                <br/><br/>
                <button type = "submit">Send</button>
            </form>
            <br/>
            <hr/>
            {messageList.map((message) => (
                <div key = {message.id}>
                    {message.text}
                    <span className="small">&nbsp; Author: {message.author}</span>
                </div>
            ))}
        </div>

    );
}

export default App;
