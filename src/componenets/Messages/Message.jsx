import Chip from '@mui/material/Chip';
function Message({ text, author }) {
    return(
        <div className="message">
            <Chip
                label={
                    <div>
                        <div className='message-text'>{text}</div>
                        <div className='message-author'>{author}</div>
                    </div>

                }
                variant="outlined"
            />
        </div>
    )
}

export default Message;