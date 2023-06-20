import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { Link } from "react-router-dom"

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const handleDemoUser = async (e) => {
    await dispatch(login('demo@aa.io', 'password'))
    closeModal()
  }

  const handleDemoUser2 = async (e) => {
    await dispatch(login('marnie@aa.io', 'password'))
    closeModal()
  }

  return (
    <>
      <h1 id='login-h1'>Log In</h1>
      <form id ='login-modal-form' onSubmit={handleSubmit}>
        <ul className='errors-ul'>
          {errors.map((error, idx) => (
            <li className='errors-li' key={idx}>{error}</li>
          ))}
        </ul>
        <label className='login-inputs-labels'>
          Email
          <input className="login-inputs"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='login-inputs-labels'>
          Password
          <input className="login-inputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button id='login-modal-login-btn' type="submit">Log In</button>
        <Link id='demo-user-link' to='/' onClick={handleDemoUser}>Demo User</Link>
        <Link id='demo-user2-link' to='/' onClick={handleDemoUser2}>Demo User 2</Link>

      </form>
    </>
  );
}

export default LoginFormModal;
