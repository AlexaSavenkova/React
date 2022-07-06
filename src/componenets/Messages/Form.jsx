import {useState, useRef, useEffect} from "react";
import './Form.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from "react-redux";
import {ADD_MESSAGE} from "../../redux/actionTypes";


function Form ({ currentChat, lastMessageId }) {

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const textRef = useRef();
    const dispatch = useDispatch();

    const handleNewMessage = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_MESSAGE,
            payload: {currentChat, id: lastMessageId + 1, text, author}
        });
        setAuthor('');
        setText('');
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