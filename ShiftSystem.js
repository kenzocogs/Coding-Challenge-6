// Task 1: Create an Employees Array of Employee Objects

let employees = [
{ name: 'Kenzo', shifts: 
    [{ day: 'Tuesday', hours: 6}, {day: 'Thursday', hours: 8 }, { day: 'Friday', hours: 4}, ] },
    
{ name: 'Billybob', shifts: 
    [{ day: 'Wednesday', hours: 10}, { day: 'Thursday', hours: 3}] },

{ name: 'Claudia', shifts: 
    [{ day: 'Monday', hours: 8} ]},

{ name: 'Britney', shifts: 
    [{ day: 'Friday', hours: 9}] },

]

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts (employee) {

    console.log (`Shift Week Details`)
    console.log (`Employee Name: ${employee.name}`)
    employee.shifts.forEach(shift => 
       { console.log (`Day: ${shift.day}, Shift Length: ${shift.hours} Hours`) }); 

}

console.log(displayEmployeeShifts(employees[0]))
// Desired Output:
// Employee Name: Kenzo
// Day: Tuesday, Shift Length: 6 Hours
// Day: Thursday, Shift Length: 8 Hours
// Day: Friday, Shift Length: 4 Hours
