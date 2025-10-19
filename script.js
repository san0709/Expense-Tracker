const incomeInput = document.getElementById("incomeInput");
const totalIncome = document.getElementById("totalIncome");
const expenseDescription = document.getElementById("expense-description")
const expenseAmount = document.getElementById("expense-amount");
const totalExpense = document.getElementById("total-expense");
const budgetLeft = document.getElementById("budget-left");
const expenseTable = document.getElementById("expense-table");


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

    if (expenseInput == 0 || Number(descriptionValue) == 0) {
        alert("Enter valid amount and description!!");
    }
    else {
        const newExpenseTotal = currentExpenseTotal + expenseInput;
        totalExpense.textContent = newExpenseTotal;
        generateExpenseData(descriptionValue, expenseInput);
        const currentIncome = Number(totalIncome.textContent);
        const newBudgetLeft = calculateBudget(currentIncome, newExpenseTotal);
        budgetLeft.textContent = newBudgetLeft;

    }

    expenseDescription.value = '';
    expenseAmount.value = ''
}

function generateExpenseData(description, amount) {
    let createRow = document.createElement('tr');
    createRow.innerHTML = `
        <td>${description}</td>
        <td>${amount}</td>
        <td><button class="edit-icons"><i class="fa-solid fa-pen-to-square fa-xl"
            style="color: #0d4370;"></i></button>
            <button class="edit-icons"><i class="fa-solid fa-trash fa-xl"
                style="color: #0d4370;"></i></button>
        </td>`
    expenseTable.append(createRow);
}

function reset() {
    window.location.reload();
}

function calculateBudget(income, expense) {
    const remaningBudget = income - expense;
    return remaningBudget;
}

