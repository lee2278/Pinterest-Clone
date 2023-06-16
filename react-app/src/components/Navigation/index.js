import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	if (sessionUser) {
		return (

			<ul className='links-and-profile-btn-container'>
				<div className='links-container'>
					<li>
						<NavLink className='home'exact to="/">Common Interests</NavLink>
					</li>
					<li>
						<NavLink exact to="/pin-maker">Create</NavLink>
					</li>
				</div>
				{isLoaded && (
					<div className='profile-group'>
					<li>
						<NavLink exact to={`/${sessionUser.username}`}>Me</NavLink>
					</li>
					<li>
						<ProfileButton user={sessionUser} />
					</li>
					</div>
				)}
			</ul>
		);
	} else {
		return (

			<ul className='links-and-profile-btn-container'>
				<li>
					<NavLink className='home' exact to="/">Common Interests</NavLink>
				</li>
				{isLoaded && (
	
					<div className='login-signup-container'>
						<OpenModalButton
							buttonText="Log In"
							// onItemClick={closeMenu}
							modalComponent={<LoginFormModal />}
						/>

						<OpenModalButton
							buttonText="Sign Up"
							// onItemClick={closeMenu}
							modalComponent={<SignupFormModal />}
						/>
					</div>
				)}
			</ul>
		);
	}

}

export default Navigation;
