import './App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Tasks from './components/Tasks';
import Add from './components/Add';
import { useState } from 'react';
import api from './Connection/Api';
import { useRef } from 'react';
import Toast from 'react-bootstrap/Toast';

function App() {

  const [modalShow, setModalShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [toast, setToast] = useState(false);
  const employee = useRef();

  const toggleToast = () => setToast(!toast);

  const getTasks = (e) => {
    e.preventDefault();
    const id = employee.current.value;
    api.get(`/tasks/${id}`).then((response) => {
      const array = response.data.payload;
      setTasks(array);
    }).catch((err) => {
      toggleToast();
    })
  }


  return (
    <div className="App">

      <Toast show={toast} bg="danger" className='toast' onClose={toggleToast}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Error</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>Something went wrong : Check Id again.</Toast.Body>
      </Toast>
      <Form onSubmit={getTasks}>
      <InputGroup className="mb-3">
        <Form.Control
          required
          ref={employee}
          placeholder="Employee Id"
          aria-describedby="basic-addon2"
        />
        <Button type="submit" variant="primary">Get Tasks</Button>{' '}
        <Button style={{ marginInline: '4px' }} onClick={() => setModalShow('task')} variant="secondary">Add Task</Button>{' '}
        <Button variant="secondary" onClick={() => setModalShow('employee')}>Add Employee</Button>{' '}
      </InputGroup>
      </Form>
      <Add
        type={modalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {tasks ? <Tasks setTasks={setTasks} tasks={tasks} /> : ""}

    </div>
  );
}

export default App;
