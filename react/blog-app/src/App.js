import './App.css';
import {Button} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div className="App">
      <heade className="App-header">
        <Button color='primary' 
        variant='contained' 
        // startIcon={<SendIcon/>}
        endIcon={<DeleteIcon />}
        style={{backgroundColor:'green'}}>delete</Button>
      </heade>
    </div>
  );
}

export default App;
