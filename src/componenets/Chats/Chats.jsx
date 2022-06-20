import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Chats( {chatList} ) {
    console.log(chatList);
    return (
        <List>
            {chatList.map((chat) => (
                    <ListItem button>
                        <ListItemText primary={chat.name} />
                    </ListItem>
            ))}
        </List>
    )
}
export default Chats;