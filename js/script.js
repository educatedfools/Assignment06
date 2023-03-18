// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let table = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = table.rows.length;
document.getElementById('empCount').append(`: ${empCount - 1}`);
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.getElementById('id').value;
    let empName = document.getElementById('name').value;
    let empExtension = document.getElementById('extension').value;
    let empEmail = document.getElementById('email').value;
    let empDept = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let row1 = row.insertCell(0);
    let row2 = row.insertCell(1);
    let row3 = row.insertCell(2);
    let row4 = row.insertCell(3);
    let row5 = row.insertCell(4);
    let row6 = row.insertCell(5); //row for delete button
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    row1.innerText = empId;
    row2.innerText = empName;
    row3.innerText = empExtension;
    row4.innerText = empEmail;
    row5.innerText = empDept;
    // CREATE THE DELETE BUTTON
    let delBtn = document.createElement('button');
    let delX = document.createTextNode('Remove');
    delBtn.className = 'btn btn-danger btn-sm';
    delBtn.appendChild(delX);
    row6.appendChild(delBtn);
    delBtn.addEventListener('click', delEmployee);
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    document.getElementById('empCount').innerHTML = '';
    document.getElementById('empCount').append(`: ${table.rows.length - 1}`);
})

// DELETE EMPLOYEE
delEmployee = (e) => {
    let empName = e.target.parentElement.parentElement.children[1].innerText;
    let empDelConfirm = confirm(`Are you sure you want to delete employee: ${empName}?`);
    if(empDelConfirm === true){
        table.deleteRow(e.target.parentElement.parentElement.rowIndex);
        let empCount = table.rows.length;
        document.getElementById('empCount').innerHTML = '';
        document.getElementById('empCount').append(`: ${empCount - 1}`);
    }
}