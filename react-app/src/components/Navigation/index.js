import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import AboutModal from './AboutModal';

import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	if (sessionUser) {
		return (

			<ul className='links-and-profile-btn-container'>
				<div className='links-container'>
					<li id='nav-link-li'>
						<NavLink className='home' exact to="/"><img id='logo-img' src="https://i.pinimg.com/564x/a9/6f/4f/a96f4ff523ceb1ac12bbe6ea9378a866.jpg" alt='' /></NavLink>
						<NavLink className='home' exact to="/">Common Interests</NavLink>
					</li>
					<li>
						<NavLink id='create-link' exact to="/pin-maker">Create</NavLink>
					</li>
					<div>
						<form id='search-form'>
							<div className='search-input-and-icon-container'>
							<input id='search-input'
								type='text'
								placeholder='Search'>
							</input>
							<span className="material-symbols-outlined">
								search
							</span>
							</div>
						</form>
					</div>
				</div>
				{isLoaded && (
					<div className='profile-group'>
						<li className='user-link-wrapper'>
							<NavLink id='user-link' exact to={`/${sessionUser.username}`}>{`${sessionUser.username[0]}`}</NavLink>
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
				<li id='nav-link-li'>
					<NavLink className='home' exact to="/"><img id='logo-img' src="https://i.pinimg.com/564x/a9/6f/4f/a96f4ff523ceb1ac12bbe6ea9378a866.jpg" alt='' /></NavLink>
					<NavLink className='home' exact to="/">Common Interests</NavLink>
				</li>
				{isLoaded && (

					<div className='login-signup-container'>

						<div className='about-btn-container'>
							<OpenModalButton
								buttonText="About"
								modalComponent={<AboutModal />}
							/>
						</div>
						<div className='login-btn-container'>
							<OpenModalButton
								buttonText="Log In"
								modalComponent={<LoginFormModal />}
							/>
						</div>
						<div className='signup-btn-container'>
							<OpenModalButton
								buttonText="Sign Up"
								modalComponent={<SignupFormModal />}
							/>
						</div>
					</div>
				)}
			</ul>
		);
	}

}

export default Navigation;
