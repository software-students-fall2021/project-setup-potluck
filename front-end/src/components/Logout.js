const { useEffect } = require("react")
const { Redirect } = require("react-router-dom")

//NOTE: Logging out with JWT authentication requires nothing from the backend, it is
//entirely handled in the front-end (this file)

const Logout = props => {
  // when this component loads, log out the user
  useEffect(() => {
    localStorage.removeItem("token")
  }, [])

  // navigate the user to the home page after logging them out
  return (
    <>
      <Redirect to="/" />
    </>
  )
}

export default Logout