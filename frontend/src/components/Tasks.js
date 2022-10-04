import React from 'react'
import { Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import api from '../Connection/Api';
import moment from 'moment';
import '../App.css'

function Tasks(props) {

  const changeStatus = (e) => {
    api.post(`task/status/${e.target.value}`).then((response) => {
      console.log(response);
      const result = props.tasks.map((task)=>{
        if(task._id === e.target.value) task.status = !task.status;
        return task;
      })
      console.log(result);
      props.setTasks([...result]);

    }).catch((err) => {
      console.log(err.toString());
    })
  }

  const sortStart = ()=>{
    const result = [...props.tasks].sort(function(a,b){
      return new Date(b.start) - new Date(a.start);
    });
    console.log(result);
    props.setTasks(result);
  }

  const sortEnd = ()=>{
    const result = [...props.tasks].sort(function(a,b){
      return new Date(b.start) - new Date(a.start);
    }).reverse();
    props.setTasks(result);
  }
  const sortPriority = () => {
    const highPriority = props.tasks.filter((task) => task.priority === "high" ? task : '');
    const lowPriority = props.tasks.filter((task) => task.priority === "low" ? task : '');
    const result = highPriority.concat(lowPriority);
    props.setTasks(result);
  }

  const sortStatus = () => {
    const completed = props.tasks.filter((task) => task.status === false ? '' : task);
    const pending = props.tasks.filter((task) => task.status === false ? task : '');
    const result = pending.concat(completed);
    props.setTasks(result);
    console.log(result);
  }

  var num = 0;
  return (
    <>
      {

        props.tasks.length < 1 ? "Add or fetch tasks." :
          <>
            <h5>
              Sort By
            </h5>
            <Form className='filter'>
              <Form.Check
                onClick={sortPriority}
                className='filter-child'
                label="Priority"
                name="group1"
                type={'radio'}
              />
              <Form.Check
                onClick ={sortStart}
                className='filter-child'
                label="Start Date"
                name="group1"
                type={'radio'}
              />
              <Form.Check
                onClick ={sortEnd}
                className='filter-child'
                label="End Date"
                name="group1"
                type={'radio'}
              />
              <Form.Check
                onClick={sortStatus}
                className='filter-child'
                label="Status"
                name='group1'
                type={'radio'}
              />
            </Form>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Start Date - Time</th>
                  <th>End Date - Time</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.tasks.map((task) => {
                    moment.locale('en');
                    var start = moment(task.start).format('DD-MM-YYYY HH:mm');
                    var end = moment(task.end).format('DD-MM-YYYY HH:mm');
                    num++;
                    return <tr>
                      <td>{num} </td>
                      <td>{task.title} </td>
                      <td>{task.description} </td>
                      <td>{start} </td>
                      <td>{end} </td>
                      <td>{task.priority} </td>
                       <Form.Check onChange={changeStatus} value={task._id} checked = {task.status} aria-label="option" />
                    </tr>
                  })
                }
              </tbody>
            </Table>
          </>
      }
    </>
  )
}

export default Tasks