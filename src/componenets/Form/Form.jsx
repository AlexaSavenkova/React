import {useState, useRef, useEffect} from "react";
import './Form.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Form ({ setMessageList }) {

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(1);
    const textRef = useRef();

    const handleNewMessage = (event) => {
        event.preventDefault();
        setMessageList(prevState => [...prevState, {
            id:id,
            text,
            author
        }]);
        setAuthor('');
        setText('');
        setId((prevId)=> prevId+1); // увеличиваем id для следующего сообщения
        textRef.current.focus();
    }

    // фокус при открытии страницы
    useEffect(() => {
        textRef.current?.focus();
        }, []);

    return (
        <form onSubmit={handleNewMessage}>
            <label htmlFor="text">Message:</label>
            <TextField
                variant="standard"
                required
                type="text"
                id = "text"
                inputRef = {textRef}
                value={text}
                onChange={(event) => setText(event.target.value)}
                autoFocus = {true}
            />
            <label htmlFor="author">Author</label>
            <TextField
                variant="standard"
                required
                type="text"
                id = "author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
            />
            {/*<input required type="author" id="author" value={author} onChange={(event) => setAuthor(event.target.value)}/>*/}
            &nbsp;
            <Button
                type = "submit"
                variant="contained"
                endIcon={<SendIcon/>}
            >
                Send
            </Button>
        </form>
    )
}

export default Form;