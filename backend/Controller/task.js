const Task = require('../Models/task');
const taskServices = require("../Services/task");

exports.changeStatus = async (req, res)=>{
    try {
        if(!req.params.id) return res.status(401).send({payload:"id not given."});
        const result = await taskServices.changeStatus(req.params.id);
        res.status(200).send({payload: result});        
    } catch (error) {
        res.status(500).send({payload: error});
    }
}

exports.addTask = async (req, res)=>{
    try {
        if(!req.params.id) return res.status(401).send({payload:"id not given."});
        if(req.body.priority == 'on') req.body.priority = "high";
        console.log(req.body);
        const result = await taskServices.addTask(req.body, req.params.id);
        res.status(200).send({payload: result});        
    } catch (error) {
        console.log(error);
        res.status(500).send({payload: error.toString()});
    }
}