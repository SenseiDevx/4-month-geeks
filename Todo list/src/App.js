import {useEffect, useState} from 'react';
import styles from './App.css';
import Modal from './components/Modal/Modal';
import Buttons from './components/Button/Buttons';
import TaskList from './components/TaskList/TaskList';
import Input from "./components/Input/Input";
import {Button} from "@mui/material";


function App() {
  const [ show, setShow ] = useState(false);
  const [ newTask, setNewTask ] = useState('');
  const [ inputForState, inputChange] = useState("");
  const [ filtered, setFiltered] = useState('all')
  const [ tasks, setTasks ] = useState([
    {
        id: 1,
        title: 'OOZ ZHABUU',
        editing:false,
        completed: false
    },
      {
        id: 2,
        title: 'OOZ ACHUU',
        editing:false,
        completed: false
    },
  ])
    const inputFilter = tasks.filter(item => item.title.trim().toLowerCase().includes(inputForState.trim()))

    const handleShow  = () => setShow(!show)

    const handleChangeCheck = (event) => {
      setNewTask(event.target.value);
    }

    const handleAddTask = () => {
        setTasks(prevTasks => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * 100),
                title: newTask,
                completed: false,
                editing: false
            }
        ]);
        handleShow();
    };
    console.log(tasks)
    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleDone = (id) => {
        const currentIndex = tasks.findIndex(task => task.id === id)
        tasks[currentIndex].completed = !tasks[currentIndex].completed
        setTasks([...tasks])
    };console.log(tasks)

    const handleEdit = (editTodo) => {
        const editList = tasks.map(task => {
            if(task.id === editTodo.id) {
                return {...task, title: editTodo.title}
            }
            return task
        })
        console.log(editList)
        setTasks(editList)
    };

    // useEffect(() => {
    //     const myLocalList = JSON.parse(localStorage.getItem('tasks'));
    //     if (!myLocalList.length) {
    //         setTasks(myLocalList)
    //         console.log('вытянули')
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }, [tasks])

    const updateInput = (event) => {
        inputChange((event.target.value).toLowerCase());
    };

    let resultFilter;
    if (filtered === 'all') {
        resultFilter = inputFilter;
    } else if (filtered === 'completed') {
        resultFilter = inputFilter.filter(t => t.completed);
    } else if (filtered === 'notCompleted') {
        resultFilter = inputFilter.filter(t => !t.completed);
    } else {
        resultFilter = null;
    }

    const filteredInput = ({target}) => {
        setFiltered(target.value);
    }

    const deleteAllTask = () => {
        setTasks([])
        localStorage.clear()
    }


  return <>
    <div className="App">
      {show && <Modal
      handleChangeCheck={handleChangeCheck}
      handleAdd={handleAddTask}
      handleShow={handleShow}  />}

      <Buttons handleClick={handleShow}>
        Open modal window...
      </Buttons>
        <Input name="search" onChangeFunc={updateInput}/>
        <div  className={styles.twoItems}>
            <Button onClick={deleteAllTask} variant="outlined" color="error">delete all tasks</Button>
              <select
                  onChange={filteredInput}>
                  <option value="all">All tasks</option>
                  <option value="completed">Completed</option>
                  <option value="notCompleted">Not Completed</option>
              </select>


        </div>

          <TaskList
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          list={resultFilter}
          searchTask={inputForState}
          />
    </div>
  </>
}

export default App;
