const Employee = require('../Models/employee');
const Tasks = require('../Models/task');

exports.addTask = (taskDetails, employeeId) => {
    return new Promise((resolve, reject) => {
        new Tasks(taskDetails).save((err, task) => {
            if (err || !task) return reject(err || "could'nt create task.");
            Employee.updateOne({_id: employeeId}, {$push: {tasks: task._id}}, (err, result)=>{
                if(err) return reject(err);
                return resolve(task);
            })
        })
    })
}


exports.changeStatus = (id) => {
    return new Promise((resolve, reject) => {
        Tasks.findOne({ _id: id }, function (err, task) {
            if (err || !task) return reject(err || 'Cannot find task.');
            task.status = !task.status;
            task.save(function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    })
} 