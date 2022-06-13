import './App.css';
import Message from "./Message";

function App() {
    const message = 'This is a new message';

    return (
        <div className="App">
            <Message text={message}/>
        </div>
    );
}

export default App;
