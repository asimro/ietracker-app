import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            amount: +amount
        }

        addTransaction(newTransaction);

    }

    return (
        <div>
            <h3>Adding New Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription (e.target.value) }
                        placeholder="Transaction Details"
                        required = "required"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input type ="number"
                        id ="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value) }
                        placeholder="Value of Transaction"
                        required = "required"
                        />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
