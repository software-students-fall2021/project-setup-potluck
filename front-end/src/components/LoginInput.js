import React from "react";
import "../styles/LoginInput.css"

export default function Form() {

 return (
   <form>
     <label>Email</label>
     <input name="email"/>
     <label>Password</label>
     <input name="password"/>
     <input type="submit" />
   </form>
 );
}