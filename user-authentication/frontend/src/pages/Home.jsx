import React from 'react'
import Nav from '../components/Nav'
import Users from '../components/Users'

const Home = () => {
  return (
    <div>
      <Nav title={<span className="fw-bold text-uppercase">users</span>}/>
      <Users />
    </div>
  )
}

export default Home
