import './App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Tasks from './components/Tasks';
import Add from './components/Add';
import { useState } from 'react';
function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Employee Id"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary">Get Tasks</Button>{' '}
        <Button style={{ marginInline: '4px' }} onClick={() => setModalShow('task')} variant="secondary">Add Task</Button>{' '}
        <Button variant="secondary" onClick={() => setModalShow('employee')}>Add Employee</Button>{' '}
      </InputGroup>
      <Add
        type={modalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Tasks />

    </div>
  );
}

export default App;
