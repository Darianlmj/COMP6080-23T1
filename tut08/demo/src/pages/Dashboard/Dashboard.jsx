import React from 'react'
import { useContext } from 'react'
import StoreContext from '../../contexts/context'

const Dashboard = () => {
  const {
    token: [token, setToken]
  } = useContext(StoreContext);


  return (
    <div>
      <h1>Dashboard</h1>
      <p>Token: {token}</p>
    </div>
  )
}

export default Dashboard