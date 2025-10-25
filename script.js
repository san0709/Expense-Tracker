const incomeInput = document.getElementById("incomeInput");
const totalIncome = document.getElementById("totalIncome");
const expenseDescription = document.getElementById("expense-description")
const expenseAmount = document.getElementById("expense-amount");
const totalExpense = document.getElementById("total-expense");
const budgetLeft = document.getElementById("budget-left");
const expenseTable = document.getElementById("expense-table");


function calculateBudget(income, expense) {
    const remaningBudget = income - expense;
    return remaningBudget;
}

function updateBudgetTotals(expenseChange) {
    const currentExpenseTotal = Number(totalExpense.textContent);
    const newExpenseTotal = currentExpenseTotal + expenseChange;
    totalExpense.textContent = newExpenseTotal;

    const currentIncome = Number(totalIncome.textContent);
    const newBudgetLeft = calculateBudget(currentIncome, newExpenseTotal);
    budgetLeft.textContent = newBudgetLeft;
}

function getInputAmount() {

    const incomeInputValue = Number(incomeInput.value);
    const currentTotal = Number(totalIncome.textContent);
    if (incomeInputValue == 0) {
        alert("Enter valid amount!!")
    } else {
        const newTotal = currentTotal + incomeInputValue;
        totalIncome.textContent = newTotal;
        const currentExpense = Number(totalExpense.textContent);
        const newBudgetLeft = calculateBudget(newTotal, currentExpense);
        budgetLeft.textContent = newBudgetLeft;
    }
    incomeInput.value = '';
}

function getExpenseDetails() {

    const descriptionValue = expenseDescription.value;
    const expenseInput = Number(expenseAmount.value);
    const currentExpenseTotal = Number(totalExpense.textContent)

    if (expenseInput == 0 || descriptionValue.trim() === "") {
        alert("Enter valid amount and description!!");
    }
    else {
        updateBudgetTotals(expenseInput);
        generateExpenseData(descriptionValue, expenseInput);
    }

    expenseDescription.value = '';
    expenseAmount.value = ''
}


function generateExpenseData(description, amount) {
    let createRow = document.createElement('tr');
    createRow.innerHTML = `
        <td class="expense-description-cell">${description}</td>
        <td class="expense-amount-cell">${amount}</td>
        <td>
            <button class="edit-icons edit-button" ><i class="fa-solid fa-pen-to-square fa-xl"
                style="color: #0d4370;"></i></button>
            <button class="edit-icons delete-button" ><i class="fa-solid fa-trash fa-xl"
                style="color: #0d4370;"></i></button>
        </td>`;

    expenseTable.append(createRow);

    const editButton = createRow.querySelector('.edit-button');
    const deleteButton = createRow.querySelector('.delete-button');

    deleteButton.addEventListener('click', deleteExpense);
    editButton.addEventListener('click', editExpense);
}

function deleteExpense(event) {
    const rowToDelete = event.target.closest('tr');

    const expenseCell = rowToDelete.querySelector('.expense-amount-cell');
    const deletedAmount = Number(expenseCell.textContent);

    updateBudgetTotals(-deletedAmount);

    rowToDelete.remove();
}

function editExpense(event) {
    const rowToEdit = event.target.closest('tr');
    const descCell = rowToEdit.querySelector('.expense-description-cell');
    const amountCell = rowToEdit.querySelector('.expense-amount-cell');
    const editButton = rowToEdit.querySelector('.edit-button');

    if (editButton.textContent.trim() === "Save") {
        const newDescription = descCell.querySelector('input').value;
        const newAmount = Number(amountCell.querySelector('input').value);

        if (newAmount <= 0 || newDescription.trim() === "") {
            alert("Please enter valid update values.");
            return;
        }

        const originalAmount = Number(rowToEdit.dataset.originalAmount);

        const expenseDifference = newAmount - originalAmount;

        updateBudgetTotals(expenseDifference);

        descCell.innerHTML = newDescription;
        amountCell.innerHTML = newAmount;

        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square fa-xl" style="color: #0d4370;"></i>';
        rowToEdit.classList.remove('editing');
        delete rowToEdit.dataset.originalAmount;

    } else {

        const originalAmount = Number(amountCell.textContent);
        rowToEdit.dataset.originalAmount = originalAmount;
        descCell.innerHTML = `<input type="text" value="${descCell.textContent}" style="width: 90%;">`;
        amountCell.innerHTML = `<input type="number" value="${amountCell.textContent}" style="width: 80%;">`;

        editButton.innerHTML = 'Save';
        rowToEdit.classList.add('editing');

        descCell.querySelector('input').focus();
    }
}

function reset() {
    window.location.reload();
}