//create employee obj
const employee = {name: "Jonte", streetAddress: "Eastest of lands"};
//update employee non destructive
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}
//update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
//delete from employees
function deleteFromEmployeeByKey(employee, key) {
    const newobj = {...employee};
    delete newobj[key];
    return newobj;

}
//delete from employees destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}