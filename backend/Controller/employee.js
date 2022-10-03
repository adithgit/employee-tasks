const mongoose = require('mongoose');
const employeeService = require('../Services/employee');

exports.addEmployee = async (req, res)=>{
    try {
        const result = await employeeService.addEmployee(req.body);
        res.status(200).send({payload: result});        
    } catch (error) {
        res.status(500).send({payload: error.toString()});
    }
}

exports.getTasks = async (req, res)=>{
    try {
        if(!req.params.id) return res.status(401).send({payload:"Id not given."});
        const result = await employeeService.getTasks(req.params.id);
        res.status(200).send({payload: result});        
    } catch (error) {
        res.status(500).send({payload: error});
    }
}