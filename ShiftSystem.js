// Task 1: Create an Employees Array of Employee Objects

let employees = [
{ name: 'Kenzo', shifts: 
    [{ day: 'Tuesday', hours: 6}, {day: 'Thursday', hours: 8 }, { day: 'Friday', hours: 4}, ] },
    
{ name: 'Billybob', shifts: 
    [{ day: 'Wednesday', hours: 10}, { day: 'Thursday', hours: 3}] },

{ name: 'Claudia', shifts: 
    [{ day: 'Monday', hours: 8} ]},

{ name: 'Britney', shifts: 
    [{ day: 'Thursday', hours: 9}] },

]

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts (employee) {
   
    console.log (`Shift Week Details`)
    console.log (`Employee Name: ${employee.name}`);
    employee.shifts.forEach(shift => 
       { console.log (`Day: ${shift.day}, Shift Length: ${shift.hours} Hours`) }); 

}

console.log(displayEmployeeShifts(employees[0]));
// Desired Output:
// Employee Name: Kenzo
// Day: Tuesday, Shift Length: 6 Hours
// Day: Thursday, Shift Length: 8 Hours
// Day: Friday, Shift Length: 4 Hours

// Task 3: Create a Function to Assign a New Shift

function assignShift (name, day, hours) {

    // Checking if the employee name is in the employees array
    let emp = employees.find (employee => employee.name === name);

    if (!emp) {
        console.log (`Error: ${name} is not a valid employee name`);
        return;
    }
    // Now checking if the employee already has an assigned shift for the day
    let shiftCheck = emp.shifts.find(shift => shift.day === day);
    if (shiftCheck) {
        console.log (`Error: ${name} is already assigned a shift on ${day}`);
        return;
    }

    // After validating info, now pushing info into array
    emp.shifts.push({day, hours});
    console.log (`${name} has been assigned a shift on ${day} for ${hours} hours`);
}

console.log (assignShift('Billybob', 'Friday', 8)) // Should log a success message
console.log (assignShift('Excelsior', 'Friday', 8)) // Should log a name-related error
console.log (assignShift('Kenzo', 'Friday', 8)) // Should log a shift-related error

// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours (empName) {
// First checking if employee name is valid
let emp = employees.find (employee => employee.name === empName)

    if (!emp) {
        console.log (`Error: ${empName} is not a valid employee name`);
        return;
    }
// Now using the reduce method to add everything up
let totalHours = emp.shifts.reduce((total, shift) => total + shift.hours, 0);
console.log(`${empName} has worked a total of ${totalHours} hours for the week.`)

}

console.log (calculateTotalHours('Excelsior')) // Should log a name-related error
console.log (calculateTotalHours('Billybob')) // Shoudl log that Billybob has worked for 21 hours this week

// Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees (day) {
// filtering out employees that are not scheduled on a day (+ .some method)
let availability = employees.filter (employee => !employee.shifts.some (shift => shift.day === day))

// handling case where no employee is free on listed day
if (availability.length === 0) {
    console.log (`Sorry, there are no people available to work on ${day}`)
}
// now logging all valid employees
else {
console.log (`${day}'s available employees:`)
availability.forEach(employee => console.log(employee.name)) 
}

}

console.log (listAvailableEmployees('Friday'))
// Should log Claudia and Britney as available. Friday is used to show that Billybob's Friday shift was successfully
// added, as he is not listed here. 