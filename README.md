# Personal Expense Tracker

A simple personal finance dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**.
The application provides a clear overview of income, expenses, savings, and recent transactions through a clean dashboard interface.

## Features

* Dashboard overview with summary cards
* Expense and category charts
* Transaction table
* Sidebar navigation between pages
* Responsive layout

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* React
* Recharts (for charts)

## Pages

* **Dashboard** – overview of balance, income, expenses, and charts
* **Transactions** – list of recorded transactions
* **Budgets** – budgeting overview
* **Reports** – visual reports and insights
* **Settings** – user configuration page

## Project Structure

```
src
 ├─ app
 │   ├─ dashboard
 │   ├─ transactions
 │   ├─ budgets
 │   ├─ reports
 │   └─ settings
 │
 ├─ components
 │   ├─ Sidebar
 │   ├─ SummaryCard
 │   ├─ TransactionTable
 │   ├─ ExpenseChart
 │   └─ ExpensePieChart
 │
 └─ data
     └─ transactions.ts
```

## Live link:
[https://personal-expense-tracker-rho-five.vercel.app/](https://personal-expense-tracker-rho-five.vercel.app/)

## Installation

Clone the repository:

```
git clone https://github.com/YOUR-USERNAME/personal-expense-tracker.git
```

Navigate into the project folder:

```
cd personal-expense-tracker
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

## Purpose

This project was built as a **frontend portfolio project** to demonstrate:

* Building applications with Next.js
* Styling with Tailwind CSS
* Using TypeScript in a React environment
* Structuring reusable components
* Creating dashboard-style user interfaces

## Future Improvements

* Add transaction form
* Persistent storage (localStorage or database)
* Authentication
* API integration
* Mobile optimization

## License

This project is for educational and portfolio purposes.

