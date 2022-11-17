import * as React from 'react'
import PropTypes from 'prop-types'

function UsernameForm({onSubmitUsername}) {
  const userNameRef = React.useRef()
  const [error, setError] = React.useState(false)
  const [userName, setUserName] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(userName)
  }
  function handleChange(event) {
    //USING REF TO FIND VALUE
    const userNameInput = userNameRef.current.value
    //USING EVENT PROPERTIES TO FIND VALUE
    const {value} = event.target
    //CONTROLLED INPUT
    setUserName(userNameInput.toLowerCase())

    // UNCONTROLLED INPUT
    // const isNotLowerCase = value !== value.toLowerCase()
    //   setError(isNotLowerCase)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={userName}
          onChange={handleChange}
          ref={userNameRef}
          type="text"
        />
      </div>
      {error && <div role="alert">Please use lower case only</div>}
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

UsernameForm.propTypes = {
  onSubmitUsername: PropTypes.func.isRequired,
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
