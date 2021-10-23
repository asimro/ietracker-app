import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';



export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);
    const Amounts = transactions.map(transaction => transaction.amount);


    const income = Amounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toLocaleString("en-US");

    const expense = Math.abs(Amounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toLocaleString("en-US");




    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4> 
                <p className="money minus">
                    {expense}
                </p>
            </div>
            
        </div>
    )
}