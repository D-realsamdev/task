// import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeNew from './views/HomeNew';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Onboard from './views/Onboard';
import OnboardedKids from './views/OnboardedKids';
import Dashboard from './views/Dashboard';
import { useEffect } from 'react'
const Routing = () => {
useEffect(()=>{
	window.scrollTo(0, 0)
})

	return (
		<AnimatePresence>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomeNew />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<SignUp />} />
					<Route exact path="/onboard" element={<Onboard />} />
					<Route exact path="/onboarded_kids" element={<OnboardedKids />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					
					{/* <Route path="*" element={<NotFound/>}/> */}
				</Routes>
			</Router>
		</AnimatePresence>
	);
};
export default Routing;
