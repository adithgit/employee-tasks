const Employee = require('../Models/employee');
const Tasks = require('../Models/task');

exports.addEmployee = (employeeDetails) => {
    return new Promise((resolve, reject) => {
        new Employee(employeeDetails).save((err, result) => {
            if (err) return reject(err);
            return resolve(result);
        })
    })
}


exports.getTasks = (id) => {
    return new Promise((resolve, reject) => {
        Employee.findOne({ _id: id }, (err, employee) => {
            if(err || !employee) return reject(err || 'Invalid employee id.')
            Tasks.find({ _id: { $in: employee.tasks } }, (err, result) => {
                if (err) return reject(err)
                return resolve(result);
            })
        })
    })
} 