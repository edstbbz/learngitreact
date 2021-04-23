// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  const userNameInput = React.createRef() 
  const submitHandler = (e) => {
    e.preventDefault()
    onSubmitUsername(userNameInput.current.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
       <label htmlFor="userNameInput">Username:</label>
        <input id="userNameInput" type="text" ref={userNameInput} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const App = () => {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
