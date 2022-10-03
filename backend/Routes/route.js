const express = require('express');
const router = express.Router();
const taskController = require('../Controller/task');
const employeeController = require('../Controller/employee');

// Get all the tasks of specific employee
router.get('/tasks/:id', employeeController.getTasks)

// Change status of a task
router.post('/task/status/:id', taskController.changeStatus)

// Add task
router.post('/add/task/:id', taskController.addTask)

// Add employee
router.post('/add/employee', employeeController.addEmployee)

module.exports = router;