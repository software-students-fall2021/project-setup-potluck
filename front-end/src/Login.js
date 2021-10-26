import "./Login.css"

// Import components
import LoginInput from "./components/LoginInput"

function Login() {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Login</h1>   
        <LoginInput></LoginInput>
    </div>
  )
}

export default Login