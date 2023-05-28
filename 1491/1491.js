/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b);
    let totalSalary = 0, employeeCount = salary.length - 2;
    for(let i = 1; i <= employeeCount; i++) {
        totalSalary += salary[i];
    }

    return totalSalary/employeeCount;

};