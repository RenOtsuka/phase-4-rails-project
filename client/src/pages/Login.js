import { useState } from "react";
import LoginForm from "../Login/LoginForm";
import SignUpForm from "../Login/SignUpForm";

function Login({onLogin}){ 
  const [showLogin, setShowLogin] = useState(true);

  return(
    <div className="login">
      {showLogin ? (
        <>
        <LoginForm onLogin={onLogin} />
        <p>
          Don't have an account?
          <button onClick={() => setShowLogin(false)}>
            Signup
          </button>
        </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>
            Already have an account?
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
    
  );


}

export default Login;