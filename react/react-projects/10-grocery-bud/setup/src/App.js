import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

// function to resolve issue with wiping list data once after refresh
// so, here we are using locaStorage will keep list data
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}
function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
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
      setList(
        list.map((item) => {
          if(item.id === editId) {
            return { ...item, title: name};
          }
          return item;
        })
      )
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'value changed', 'success');
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

  // function to edit specific item' first using find() will find item array based on it's id which 
  // we have clicked then set it to name list and set id to editId
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }

  // everytime our list gets updated we will add or update value in local storage.
  // because when we refresh page our list item gets vanished so for time being we are using local storage.
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  },[list]);
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
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className="clear-btn" onClick={clearItems}>clear items</button>
    </div>
    )}
  </section>
}

export default App
