import React from 'react'

const Home = () => {
  return (
    <div className="App">
      <span style={{color:'green',textDecoration:'underline'}}>Hello, my name is Chiamaka. Nice to meet you.</span>
      <br/><br/>
      <img src="https://images.pexels.com/photos/18963468/pexels-photo-18963468/free-photo-of-cacti-in-front-of-white-wall.jpeg" alt="Hand bag" width="50%" height="40%" />
      <p style={{fontSize:28}}>
      Reserved keywords cannot be used as variables, function names, or any other identifiers.
      </p>
      <div style={{backgroundColor:'red', border:'2px solid gray', minHeight:75}}>
      </div>
    </div>
  )
}

export default Home