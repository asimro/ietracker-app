import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toLocaleString("en-US");



  return (
    <div>

      <h4 className="balance">Your Balance</h4>
      <h1 className="balance" id="balance"> ${balance}</h1>

    </div>
  )
}