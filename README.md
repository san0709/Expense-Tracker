# 💰 Expense Tracker Application

A simple and intuitive web-based application designed to help you track your income, expenses, and manage your budget effectively.

## ✨ Features

* **Income Tracking:** Easily add and accumulate your total income.
* **Expense Management:** Add new expenses with a description and amount.
* **Real-time Budget Calculation:** Automatically calculates total expense and remaining budget.
* **Expense History:** Displays a table of all recorded expenses.
* **Edit & Delete:** Allows modification or removal of individual expense entries.
* **Reset Functionality:** Quick option to clear all data and start fresh.

---

## 💻 Technologies Used

This project is built using standard web technologies:

* **HTML5:** For the structure and content of the application.
* **CSS3 (with embedded styles):** For styling the user interface, including a responsive, modern layout.
* **JavaScript (Vanilla JS):** For all the application's logic, including handling user input, calculations, DOM manipulation, and event listeners (for editing and deleting entries).
* **Font Awesome:** Used for the edit ($\text{✏️}$) and delete ($\text{🗑️}$) icons.
* **Google Fonts (Poppins & Roboto):** For a clean and modern typography.

---

## 🚀 How to Run Locally

To get a local copy up and running, follow these simple steps:

1.  **Save the files:** Save the provided HTML, JavaScript, and CSS code into three separate files in the same directory:
    * `index.html` (for the HTML structure)
    * `script.js` (for the JavaScript logic)
    * `style.css` (for the CSS styling)
2.  **Add Images (Optional but recommended for full visual fidelity):** For the budget summary section to look correct, you would need placeholder images named `income.png`, `expense.png`, and `budjet.png` in the same directory.
3.  **Open the file:** Double-click the `index.html` file in your file explorer. It will open automatically in your default web browser.

---

## ✍️ Usage Instructions

### 1. Adding Income

1.  In the **Income** card, enter the amount you want to add in the "Amount:" field.
2.  Click the **"Add Income"** button.
3.  The **Total Income** and **Budget Left** will update immediately.

### 2. Adding Expenses

1.  In the **Expense** card, enter a short description (e.g., "Groceries", "Rent") in the "Description:" field.
2.  Enter the expense amount in the "Amount:" field.
3.  Click the **"Add Expense"** button.
4.  The expense will be added to the **Expense History** table, and the **Total Expense** and **Budget Left** will be updated.

### 3. Editing an Expense

1.  Find the expense in the **Expense History** table.
2.  Click the **Edit icon** ($\text{✏️}$) in the 'Action' column.
3.  The description and amount cells will turn into input fields.
4.  Modify the description or amount.
5.  Click the **"Save"** button that replaced the edit icon.
6.  The totals will be recalculated based on the change.

### 4. Deleting an Expense

1.  Find the expense in the **Expense History** table.
2.  Click the **Delete icon** ($\text{🗑️}$) in the 'Action' column.
3.  The expense will be removed from the table, and the totals will be updated instantly.

### 5. Resetting the Application

1.  Click the **"Reset All"** button at the bottom of the left container.
2.  The page will reload, clearing all income, expenses, and totals.
