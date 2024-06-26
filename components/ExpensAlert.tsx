import { useState, useEffect } from 'react'

const ExpenseAlert = ({ currentExpenses, limit }: { currentExpenses: number, limit: number }) => {
  const [alert, setAlert] = useState('')

  useEffect(() => {
    if (currentExpenses >= limit) {
      setAlert('You have reached your spending limit!')
    } else if (currentExpenses >= 0.8 * limit) {
      setAlert('You are close to reaching your spending limit.')
    } else {
      setAlert('')
    }
  }, [currentExpenses, limit])

  return (
    <div>
      {alert && <p className="bg-red-500 text-white p-2 rounded">{alert}</p>}
    </div>
  )
}

export default ExpenseAlert
