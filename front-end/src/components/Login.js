import "../styles/Login.css"
import "../App.css"

function Login(){
  return (
    <div>
      <h1 class="headerText" style={{textAlign: 'center', fontSize: '75px', margin: '15px'}}>Login</h1>   
      <Form/>
    </div>
  )
}

//The login form object
const Form = () =>{

  return (
    <form>
      <label>Email</label>
      <input type="email" onChange={ handleOnChange } />
      <label>Password</label>
      <input name="password"/>
      <input type="submit" />
    </form>
  );
}

//Function to validate the user's email
const handleOnChange = ( email ) => {

  // String to validate the email input
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email)) {
      // The email address is valid
      // Input login code here
  }

}



export default Login