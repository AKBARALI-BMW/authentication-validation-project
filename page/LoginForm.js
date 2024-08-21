import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    function onSubmitHandler(event) {
        event.preventDefault();
        // Navigate to the dashboard only when the form is submitted correctly
        navigate("/dashboard");
    }

    useEffect(() => {
        // Disable the button if email is empty or password is less than 8 characters
        if (email && password.length >= 8) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email, password]);

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="loginform">
                    <h1>Login Form</h1>

                    <div className="form_input">
                        <label>Email</label>
                        <input  type={"email"}   placeholder="Enter your email" 
                            onChange={(event) => setEmail(event.target.value)}  value={email} />
                    </div>
                    <div className="form_input">
                        <label>Password</label>
                        <input  type={"password"} placeholder="Enter your password" 
                            onChange={(event) => setPassword(event.target.value)} value={password}   />
                    </div>
                    <button  type="submit"  disabled={isDisabled} 
                        style={{ backgroundColor: isDisabled ? 'gray' : 'blue' }} >Login</button>
                </div>
            </form>
        </>
    );
}

export default LoginForm;
