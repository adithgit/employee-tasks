import React from 'react'
import { Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import api from '../Connection/Api';
import moment from 'moment';

function Tasks(props) {
  
  const changeStatus = (e)=>{
    api.post(`task/status/${e.target.value}`).then((response)=>{
      console.log(response);
    }).then((err)=>{
      console.log(err);
    })
  }
  var num = 0;
  return (
    <div>
    {

    props.tasks.length < 1 ? "" :
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
        props.tasks.map((task)=>{
          moment.locale('en');
          var start = moment(task.start).format('DD-MM-YYYY - HH:mm');
          var end = moment(task.end).format('DD-MM-YYYY - HH:mm');;
          num++;
          console.log("hey")
          return <tr>
          <td>{num} </td>
          <td>{task.title} </td>
          <td>{task.description} </td>
          <td>{start} </td>
          <td>{end} </td>
          <td>{task.priority} </td>
          {
            task.status == false ? <Form.Check onChange={changeStatus} value={task._id} aria-label="option 1" /> :<Form.Check  onChange={changeStatus} value={task._id} checked aria-label="option 1" />
          }
          </tr>
        })
      }
      </tbody>
    </Table>
         }
    </div>
  )
}

export default Tasks