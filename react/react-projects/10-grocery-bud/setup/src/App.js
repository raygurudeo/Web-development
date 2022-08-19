import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:'', type:''});

  // handle alert
  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, type, msg})
  }

  // form onSubmit() functionality 
  const handleClick = (e) => {
    e.preventDefault();
    if(!name) {
      // deal with alert
      showAlert(true, 'please enter the value', 'danger');
    } else if(name && isEditing) {
      // deal with editing
    } else {
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      showAlert(true, 'item added successfully', 'success')
      setName('');
    }
  }

  // clearItem function
  const clearItems = () => {
    setList([]);
    showAlert(true, 'Empty cart', 'danger')
  }

  // function to remove a single item that will be used to pass to <List /> component aa a props
  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  }

  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleClick}>
      {/* removeAltert props will hide alert after 3000ms */}
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />} 
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" value={name} placeholder='eg: eggs' 
        onChange={(e) => setName(e.target.value)}/>
        <button className="submit-btn">
          {isEditing? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    { list.length > 0 && (
      <div className="grocery-container">
      <List items={list} removeItem={removeItem} />
      <button className="clear-btn" onClick={clearItems}>clear items</button>
    </div>
    )}
  </section>
}

export default App
